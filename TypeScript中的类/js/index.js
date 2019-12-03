"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript中的类
/*
// ES5
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name + "在奔跑!");
    }
}
var p = new Person("张三", 36);
p.run(); */
// 1.类的定义 使用class关键字
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 方法
    Person.prototype.run = function () {
        console.log(this.name + "在奔跑！");
    };
    Person.prototype.getInfo = function () {
        console.log("\u59D3\u540D\uFF1A" + this.name + "\uFF0C\u5E74\u9F84\uFF1A" + this.age);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("张三", 29);
p.run(); // 张三在奔跑！
p.setName('李四');
console.log(p.getName()); // 李四
p.getInfo(); // 姓名：李四，年龄：29
console.log("---------");
// 2.TS中实现类的继承：extends、super关键字
// 定义Student类继承自Person类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade; // 初始化新增属性
        return _this;
    }
    // 新增的方法
    Student.prototype.study = function () {
        console.log(this.grade + "\u5E74\u7EA7\u7684" + this.name + "\u5728\u5B66\u4E60\uFF01");
    };
    // 重写父类中继承的方法
    Student.prototype.getInfo = function () {
        console.log("\u59D3\u540D\uFF1A" + this.name + "\uFF0C\u5E74\u9F84\uFF1A" + this.age + "\uFF0C\u5E74\u7EA7\uFF1A" + this.grade);
    };
    return Student;
}(Person));
var s = new Student("大明", 14, 1);
// 调用继承的方法
s.run(); // 大明在奔跑！
s.study(); // 1年级的大明在学习！
s.getInfo(); // 姓名：大明，年龄：14，年级：1
console.log("----------");
// 3.TS中类里面的修饰符：TypeScript类里面定义属性的时候为我们提供了三种修饰符
/*
    public：公用类型，在类里面、子类、类外都可以访问
    protected：保护类型，在类里面、子类可以访问，在类外不可访问
    private：私有类型，在类里可以访问，在子类和类外都不可访问。
    属性如果不加修饰符默认public
*/
var Animal = /** @class */ (function () {
    function Animal(type, home, bool) {
        this.type = type;
        this.home = home;
        this.bool = bool;
    }
    Animal.prototype.eat = function () {
        console.log('吃东西！');
    };
    Animal.prototype.getInfo = function () {
        // 在类内部可以访问自身的任何类型的属性
        console.log(this.type, this.home, this.bool);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type, home, bool, legs) {
        var _this = _super.call(this, type, home, bool) || this;
        _this.legs = legs;
        return _this;
    }
    Dog.prototype.eat = function () {
        console.log("狗啃骨头！");
    };
    Dog.prototype.getHome = function () {
        // 在子类中调用父类受保护的属性
        console.log(this.home);
    };
    Dog.prototype.getBool = function () {
        // 在子类中无法访问父类私有属性
        //console.log(this.bool);
    };
    return Dog;
}(Animal));
var d = new Dog("犬科", "人类生活空间", true, 4);
// 子类中调用公有属性
console.log(d.type);
// 在类外使用公用属性
var a = new Animal("动物", "地球", false);
console.log(a.type);
// 子类中调用保护属性
d.getHome();
// 子类的实例无法调用父类受保护的属性
//console.log(d1.home);
// 父类的实例也无法直接访问受保护的属性，实际上都是外部无法访问受保护的属性
//console.log(a.home);
// 在类外无法访问类的私有属性
//console.log(d.bool);
//console.log(a.bool);
