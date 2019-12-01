"use strict";
// TypeScript中的函数
// 函数的定义
/*  ES5中定义的方法
// 函数声明法
function run() {
    console.log('run()');
}
// 匿名函数
var run2 = function () {
    console.log("run2()");
}
*/
// 1.ts中定义函数的方法，与ES5类似，但是需要在声明方法时指定函数的返回值类型
// 1.1函数声明法
function fun() {
    console.log("fun()");
    return 'fun()';
}
// 调用方法
console.log(fun());
// 1.2匿名函数法
var fun2 = function () {
    console.log('fun2()');
    return 1;
};
console.log(fun2());
// 1.3ts中定义带有参数的方法，参数列表必须指定参数类型，调用函数的时候也必须类型对应
function getInfo(name, age) {
    return name + " --- " + age;
}
console.log(getInfo('张三', 23));
var getInfo1 = function (name, age) {
    return name + " --- " + age;
};
console.log(getInfo1("李四", 24));
// 1.4没有返回值的方法
function bar() {
    console.log("bar()没有返回值");
}
bar();
console.log("--------");
// 2.函数的参数列表，
// 2.1可选参数，在ES5中实参和形参可以不一样，但是在TS中必须一样，如果不一样就需要配置可选参数，
// 方式为在可选择是否传递的参数名后加一个？,而且可选参数必须配置到参数列表的最后面
function getInfo2(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo2("张三"));
// 2.2默认参数，在ES5中没法设置默认参数，在ES6和TS中都可以设置默认参数
// 调用函数时，可以不为默认参数赋值，这时候将会使用默认参数默认的值，而调用函数时赋值了，则会覆盖默认的值
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    return name + " --- " + age;
}
console.log(getInfo3("李四"));
// 2.3剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
// 使用ES6三点运算符来接收不确定个数的形参个数
function sum1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sum1(1, 2, 3, 4, 5));
// 若三点运算符之前定义了参数，则后面的为剩余参数
function sum2(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sum2(1, 2, 3, 4, 5, 6));
console.log("----------");
function getIdInfo(str) {
    if (typeof str === 'string') {
        return "\u6211\u53EB\uFF1A" + str;
    }
    else {
        return "\u5341\u5E74\u540E\uFF0C\u6211\u7684\u5E74\u9F84\uFF1A" + (str + 10);
    }
}
console.log(getIdInfo('张三'));
console.log(getIdInfo(23));
function getIdInfo1(name, age) {
    if (age) {
        return "\u6211\u53EB" + name + "\uFF0C\u5E74\u9F84" + age;
    }
    else {
        return "\u6211\u53EB" + name;
    }
}
console.log(getIdInfo1("张三"));
console.log(getIdInfo1("张三", 23));
console.log("-----------");
// 4.箭头函数 ES6中
/*
// ES5
setTimeout(function () {
    console.log("run");
}, 1000);
*/
// 箭头函数中的this指向上下文
setTimeout(function () {
    console.log("run");
}, 1000);
