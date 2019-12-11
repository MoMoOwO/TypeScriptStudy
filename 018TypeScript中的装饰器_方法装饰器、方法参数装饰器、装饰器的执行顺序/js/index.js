"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
