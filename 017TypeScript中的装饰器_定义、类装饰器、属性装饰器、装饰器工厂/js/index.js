"use strict";
/**
 * TypeScript中的装饰器
 * 装饰器：装饰器是一种特殊类型的声明，它能偶被附加到类声明、方法、属性或参数上，可以修改类的行为。
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法，参数的功能。
 *
 * 常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
 *
 * 装饰器的写法：普通装饰器(无法传参)，装饰器工厂(可传参)
 *
 * 装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一
 *
 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.类装饰器：类装饰器在类声明之前被声明(仅靠着类声明)。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。
// 1.1类装饰器，普通装饰器，无法传参
// 定义一个类装饰器与定义一个方法一样
function logClass(params) {
    console.log(params); // params就指向了当前的类
    // 可以通过prototype属性来扩展类上的属性和方法，prototype是原型链
    params.prototype.apiUrl = "localhost://207107:";
    params.prototype.run = function () {
        console.log("我是扩展的run方法");
    };
}
// 使用@符号来用装饰器
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
// 实例化HttpClient类
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
console.log("----------");
// 1.2类装饰器，装饰器工厂，可传参
function logClass1(params) {
    return function (target) {
        console.log(target); // target指向装饰的类
        console.log(params); // params为当前传递的参数
        // 通过修饰器工厂传递参数之后就可以通过参数来进行不同的操作
        target.prototype.apiUrl = params;
    };
}
// 在装饰类的时候传递参数
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1("http://localhost:3000/data")
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
console.log(http1);
console.log(http1.apiUrl);
console.log("---------");
// 1.3类装饰器，通过类装饰器重载类的构造函数和方法
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数；
// 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
// 定义一个装饰器
function decoratorClass(target) {
    console.log(target);
    // 重载构造函数和方法
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = "我是修改后的type";
            return _this;
        }
        class_1.prototype.getInfo = function () {
            console.log(this.type + "-----");
        };
        return class_1;
    }(target));
}
var Animal = /** @class */ (function () {
    function Animal() {
        this.type = "我是构造函数里面的type";
    }
    Animal.prototype.getInfo = function () {
        console.log(this.type);
    };
    Animal = __decorate([
        decoratorClass
    ], Animal);
    return Animal;
}());
var animal = new Animal();
animal.getInfo();
console.log("--------------");
// 2.属性装饰器
/* 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
    第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。 第二个参数：成员的名字。
*/
// 类装饰器
function personDecorator(params) {
    return function (target) {
        //console.log(params);
        //console.log(target);
    };
}
// 属性装饰器
function propertyDecorator(params) {
    if (params === "instance") {
        return function (target, attr) {
            console.log(params); // 传递的参数
            console.log(target); // 当前是实例成员的属性，所以target指向类的原型对象prototype
            console.log(attr); // 属性名
            target[attr] = "修改后的name";
        };
    }
    else {
        return function (target, attr) {
            console.log(params); // 传递的参数
            console.log(target); // 当前是静态成员的属性，所以target指向类的构造函数
            console.log(attr); // 属性名
            target[attr] = "动物";
        };
    }
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getInfo = function () {
        console.log(this.name);
    };
    __decorate([
        propertyDecorator("instance")
    ], Person.prototype, "name", void 0);
    __decorate([
        propertyDecorator("static")
    ], Person, "type", void 0);
    Person = __decorate([
        personDecorator("xxx")
    ], Person);
    return Person;
}());
var p = new Person();
//p.getInfo();
console.log(p.name);
console.log(Person.type);
