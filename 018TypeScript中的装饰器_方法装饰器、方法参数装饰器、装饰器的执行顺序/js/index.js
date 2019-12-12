"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// TypeScript中的装饰器
// 3.方法装饰器  它会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法的定义
/**
 * 方法装饰会在运行时传入下列三个参数：
 * 第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 第二个参数：成员的名字
 * 第三个参数：成员的属性描述符
 */
// 装饰器
function get(params) {
    if (params === "普通") {
        return function (target, methodName, desc) {
            console.log(target); // 实例方法指向原型对象
            console.log(methodName); // 当前装饰方法的名称
            console.log(desc); // 方法描述，其中value属性就是当前装饰的方法 
            // 1.利用方法装饰器中的第一个参数来扩展类属性和方法
            target.apiUrl = "http://localhost:8080";
            target.run = function () {
                console.log("我是扩展的run方法");
            };
        };
    }
    else {
        return function (target, methodName, desc) {
            // 2.利用desc的value属性修改类中方法
            // 2.1.保存当前的方法
            var oldMethod = desc.value;
            // 2.2.修改方法
            desc.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args = args.map(function (item) {
                    return String(item);
                });
                console.log(args);
                // 2.3使用对象冒充的方式来修改方法
                oldMethod.apply(this, args);
            };
        };
    }
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    HttpClient.prototype.getInfo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log("我是getInfo方法");
    };
    __decorate([
        get("普通")
    ], HttpClient.prototype, "getData", null);
    __decorate([
        get("修改方法")
    ], HttpClient.prototype, "getInfo", null);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
console.log("--");
http.getInfo(123, true, "111dd"); // 执行装饰器修改的方法
console.log("----------");
// 方法参数装饰器
/**
 * 方法参数装饰器：
 * 方法参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型只能加一些元素数据，
 * 传入以下三个参数：
 * 第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 第二个参数：方法的名称
 * 第三个参数：参数在函数参数列表中的索引
 */
// 定义一个装饰器
function paramsDecorator(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params); // 调用装饰器时传递的参数
        console.log(target); // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log(methodName); // 方法的名称
        console.log(paramsIndex); // 方法参数在参数列表中的索引
        // 可以通过taget参数来扩展类的属性和方法
        target.addAttr = params;
    };
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // 方法参数装饰器与其他装饰器类似，只需要在参数前面加上@装饰器的名称即可
    Animal.prototype.eat = function (food) {
        console.log("吃" + food);
    };
    __decorate([
        __param(0, paramsDecorator("扩展的属性"))
    ], Animal.prototype, "eat", null);
    return Animal;
}());
var an = new Animal();
an.eat("食物");
console.log(an.addAttr);
console.log("-------------");
// 类装饰器、属性装饰器、方法装饰器、方法参数装饰器的执行顺序：
// 属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器，多个同类型的装饰器从后往前执行
// 类装饰器
function logClass1(params) {
    return function (target) {
        console.log("类装饰器1");
    };
}
function logClass2(params) {
    return function (target) {
        console.log("类装饰器2");
    };
}
// 属性装饰器
function logAttribute(params) {
    return function (target, attrName) {
        console.log("属性装饰器");
    };
}
// 方法装饰器
function logFunction(params) {
    return function (target, methodName, desc) {
        console.log("方法装饰器");
    };
}
// 方法参数装饰器
function logParams1() {
    return function (target, methodName, paramsIndex) {
        console.log("参数装饰器1");
    };
}
function logParams2() {
    return function (target, methodName, paramsIndex) {
        console.log("参数装饰器2");
    };
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.getData = function () {
        console.log("DemoFunction");
    };
    Demo.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute("我是属性装饰器")
    ], Demo.prototype, "demoAttr", void 0);
    __decorate([
        logFunction("我是方法装饰器呀")
    ], Demo.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], Demo.prototype, "setData", null);
    Demo = __decorate([
        logClass1("我是类装饰器1"),
        logClass2("我是类装饰器2")
    ], Demo);
    return Demo;
}());
