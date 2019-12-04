"use strict";
// TypeScript中的类 静态属性、静态方法、抽象类、多态
/*
// ES5中的静态方法和静态属性
function Person(name) {
    // 实例属性
    this.name = name;
    // 实例方法
    this.run = function () { };
}
// 静态方法
Person.say = function () { };
// 静态属性
Person.age = 14;

let p = new Person("aaa"); // 实例化Person对象
console.log(p.name); // 调用实例属性
p.run(); // 调用实例方法
console.log(Person.age); // 调用静态属性
Person.say(); // 调用静态方法 */
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
// 静态属性与静态方法
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        //this.age = age;
    }
    // 实例方法
    Person.prototype.run = function () {
        console.log('在跑步！');
    };
    // 使用static关键字修饰的方法为静态方法
    Person.work = function () {
        console.log('在工作！');
        console.log(this.age); // 静态方法里只能调用静态属性，静态属性只能在类内的静态方法中调用
    };
    // 使用static关键字修饰的属性为静态属性
    Person.age = 20;
    return Person;
}());
var p = new Person("张三");
p.run(); // 调用实例方法
Person.work(); // 调用静态方法
console.log("---------");
// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现 多态也是继承的一种表现
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type) {
        return _super.call(this, type) || this;
    }
    Dog.prototype.eat = function () {
        console.log('狗啃骨头！');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(type) {
        return _super.call(this, type) || this;
    }
    Cat.prototype.eat = function () {
        console.log('猫吃鱼！');
    };
    return Cat;
}(Animal));
var dog = new Dog("犬科");
dog.eat();
var cat = new Cat("猫科");
cat.eat();
console.log("---------");
// 抽象类：TS中的抽象类，是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须都在派生类中实现
// abstract抽象方法只能放到抽象类里面
// 抽象类和抽象方法用来定义标准
var Camera = /** @class */ (function () {
    function Camera(type) {
        this.type = type;
    }
    Camera.prototype.fun = function () {
        console.log('其他方法在子类中不必实现！');
    };
    return Camera;
}());
//let c = new Camera(); // 抽象类不能直接实例化
var DigitalCamera = /** @class */ (function (_super) {
    __extends(DigitalCamera, _super);
    function DigitalCamera(type) {
        return _super.call(this, type) || this;
    }
    DigitalCamera.prototype.takePhoto = function () {
        console.log(this.type + '拍了一张数字照片！');
    };
    return DigitalCamera;
}(Camera));
var FileCamera = /** @class */ (function (_super) {
    __extends(FileCamera, _super);
    function FileCamera(type) {
        return _super.call(this, type) || this;
    }
    FileCamera.prototype.takePhoto = function () {
        console.log(this.type + '拍了一张黑白照片！');
    };
    FileCamera.prototype.getType = function () {
        console.log(this.type);
    };
    return FileCamera;
}(Camera));
var dc = new DigitalCamera("数字相机");
dc.takePhoto();
var fc = new FileCamera("数字相机");
fc.takePhoto();
