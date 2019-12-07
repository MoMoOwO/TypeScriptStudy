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
var Workers = /** @class */ (function () {
    function Workers(type) {
        this.type = type;
    }
    Workers.prototype.eat = function (foot) {
        console.log(this.type + "吃" + foot + "！");
    };
    Workers.prototype.work = function () {
        console.log(this.type + "工作！");
    };
    return Workers;
}());
var w = new Workers("工人");
w.eat("员工餐厅");
w.work();
console.log("--------");
// 类可以同时继承父类又实现接口
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(type) {
        return _super.call(this, type) || this;
    }
    Programmer.prototype.eat = function (foot) {
        console.log(this.type + "吃" + foot + "！");
    };
    Programmer.prototype.work = function () {
        console.log(this.type + "工作！");
    };
    Programmer.prototype.Coding = function () {
        console.log(this.type + "写代码！");
    };
    return Programmer;
}(Workers));
var pro = new Programmer("程序员");
pro.Coding();
