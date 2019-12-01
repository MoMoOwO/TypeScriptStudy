"use strict";
/*
    TypeScript中的数据类型
    TypeScript中为了是编写的代码更规范，更有利于维护，增加了类型校验(变量声明必须指定类型)，在TypeScript中主要给我们提供了以下的数据类型
        布尔类型(boolean)
        数字类型(number)
        字符串类型(string)
        数组类型(array)
        元组类型(tuple)
        枚举类型(enum)
        任意类型(any)
        null和undefined
        void类型
        never类型
*/
// 布尔类型boolean
// ES5 var flag = true;
var flag = false;
//flag = 123; // 错误，flag是boolean类型
flag = true;
console.log(flag);
console.log("-------------");
// 数字类型number
var num = 123;
num = 456;
console.log(num);
// num = true; // 报错
console.log("-------------");
// 字符串类型string
var str = 'abcd';
console.log(str);
str = 'efgh';
// str = true; // 报错
console.log("-------------");
// 数组类型array
/*
    ts中定义数组的方式有三种
 */
// 第一种方式
var arr1 = [1, 2, 3, 4]; // 定义一个数值型数组
console.log(arr1);
// 第二种方式
var arr2 = [1, 2, 1, 3];
console.log(arr2);
// 第三种方式
var arr3 = [1, true, 'str'];
console.log(arr3);
console.log("-------------");
// 元组类型(tuple) 属于数组的一种
var tup = [1, 'abc']; // 使用元组类型为数组指定位置规定数据类型
console.log(tup);
console.log("-------------");
// 枚举类型(enum)
/*
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛的用于处理非数值的数据。
    类如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其他程序设计语言中，一般用一个数值来代表某一状态，这样处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易圆度和理解。
    也就是说，事先考虑到某一变量可能取得值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法就称为枚举方法，用这种方法定义的类型称为枚举类型。
    enum 枚举名{
        标识符[=整型常数],
        标识符[=整型常数],
        标识符[=整型常数],
        ...
        标识符[=整型常数]
    }
    如果标识符没有赋值，那么它的值就是下标(索引)
*/
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s); // 1
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c); // 1 下标 
var Color1;
(function (Color1) {
    Color1[Color1["blue"] = 0] = "blue";
    Color1[Color1["red"] = 3] = "red";
    Color1[Color1["orange"] = 4] = "orange";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.orange;
console.log(c1); // 4 
// 枚举常用来定义状态码
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
;
var e = Err.null;
console.log(e); // -2
console.log("-------------");
// 任意类型(any)
var ss = 123;
console.log(ss);
ss = true; // any类型可以被修改为其他任意类型
console.log(ss);
ss = 'str';
console.log(str);
// 任意类型的用处
var boxObj = document.querySelector("#box"); // boxObj为Object类型，但是ts中没有，这是可以指定为any类型
boxObj.style.color = 'red';
console.log("-------------");
// null和undefined  是其他类型(never)的子类型
//let num: number; // 默认不赋值的化在ts中会报错，在js中是undefined
//console.log(num);
var und;
console.log(und);
var und1;
console.log(und1);
var nul = null;
console.log(nul);
// 一个元素可能是number、undefined、null
var n1;
n1 = 123;
console.log(123);
console.log("-------------");
// void类型：TypeScript中void表示没有任何类型，一般用于定义方法且方法没有返回值的时候
/*
ES5
function fun() {
    console.log("fun()");
}
fun(); */
function fun() {
    console.log("fun()");
}
fun();
function foo() {
    return 123;
}
console.log(foo());
console.log("-------------");
// never类型 其他类型，(包含null和undefined)的子类型，代表从不会的出现的值，
// 这意味着声明never的变量只能被never类型所赋值
var a;
a = undefined;
console.log(a);
var b;
b = null;
console.log(null);
var f;
// f = 1323; // 报错
f = (function () { throw new Error('错误！'); })();
console.log("-------------");
