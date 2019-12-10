"use strict";
// TypeScript中的命名空间
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  命名空间：在代码量较大的情况下，为了避免各种变量命名之间的冲突，可将像四功能的函数、类、接口等放置到命名空间内。
 *  同Java包，.Net命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴漏需要在外部
 *  访问的兑现。命名空间内的对象通过export佬暴漏数据
 *
 *  命名空间和模块的区别：
 *      命名空间：内部模块，主要用于组织代码，避免命名冲突。
 *      模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
 */
// 定义命名空间A
var A;
(function (A) {
    // 定义两个类实现该接口    命名空间中的数据使用export关键自暴漏
    var Dog = /** @class */ (function () {
        function Dog(type) {
            this.type = type;
        }
        Dog.prototype.eat = function () {
            console.log("狗啃骨头！");
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(type) {
            this.type = type;
        }
        Cat.prototype.eat = function () {
            console.log("猫吃鱼！");
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
// 定义命名空间B,不同的命名空间内可以使用相同的变量名
var B;
(function (B) {
    // 定义两个类实现该接口
    var Dog = /** @class */ (function () {
        function Dog(type) {
            this.type = type;
        }
        Dog.prototype.eat = function () {
            console.log("狗啃骨头！");
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(type) {
            this.type = type;
        }
        Cat.prototype.eat = function () {
            console.log("猫吃鱼！");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
// 在使用命名空间的时候需要使用命名空间.变量名的形式来使用命名空间中的数据
var dog = new A.Dog("犬科");
dog.eat();
var cat = new B.Cat("猫科");
cat.eat();
// 还可以将明明空间抽离到外面的模块里，使用的时候需要先引入模块
var module_1 = require("./modules/module");
console.log(module_1.C.a);
console.log(module_1.D.a);
