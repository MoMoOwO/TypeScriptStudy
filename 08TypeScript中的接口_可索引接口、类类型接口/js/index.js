"use strict";
// TypeScript中的接口-可索引接口、类类型接口
var arr = ["abc", "de", "f"]; // 数组索引就是数值型，数组值需要满足约束为字符串型
console.log(arr);
console.log(arr[0]);
var obj = {
    name: "张三",
    age: "23"
};
console.log(obj);
console.log("-----------");
// 使用implements关键字来表示一个类实现某一个类接口，需要实现类接口中的所有属性和方法
var Dog = /** @class */ (function () {
    function Dog(type) {
        this.type = type;
    }
    Dog.prototype.eat = function () {
        console.log(this.type + "啃骨头！");
    };
    return Dog;
}());
var d = new Dog("狗");
d.eat();
var Cat = /** @class */ (function () {
    function Cat(type) {
        this.type = type;
    }
    Cat.prototype.eat = function (str) {
        console.log(this.type + "吃" + str + "！");
    };
    return Cat;
}());
var c = new Cat("猫");
c.eat("鱼");
