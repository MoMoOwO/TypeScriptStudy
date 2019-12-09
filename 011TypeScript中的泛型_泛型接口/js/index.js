"use strict";
// TypeScript中的泛型
// 实现函数接口
var getData1 = function (value1, value2) {
    return value1 + value2;
};
console.log(getData1("你好，", "TypeScript！"));
// 使用函数泛型接口初始化一个函数
var getData = function (value) {
    return value;
};
// 函数泛型接口，泛型的确定是在调用实现函数泛型接口的函数的时候确定的
console.log(getData("哈哈！"));
// 使用这种方式实现的泛型接口，泛型在函数声明时确定泛型的类型
var getInfo = function (value) {
    return value;
};
console.log(getInfo("嘻嘻！"));
