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
function fun(): string {
    console.log("fun()");
    return 'fun()';
}
// 调用方法
console.log(fun());

// 1.2匿名函数法
var fun2 = function(): number{
    console.log('fun2()');
    return 1;
}
console.log(fun2());

// 1.3ts中定义带有参数的方法，参数列表必须指定参数类型，调用函数的时候也必须类型对应
function getInfo(name: string, age: number): string{
    return `${name} --- ${age}`;
}
console.log(getInfo('张三', 23));
var getInfo1 = function (name: string, age: number):string {
    return `${name} --- ${age}`;
}
console.log(getInfo1("李四", 24));

// 1.4没有返回值的方法
function bar(): void {
    console.log("bar()没有返回值");
}
bar();
console.log("--------");

// 2.函数的参数列表，
// 2.1可选参数，在ES5中实参和形参可以不一样，但是在TS中必须一样，如果不一样就需要配置可选参数，
// 方式为在可选择是否传递的参数名后加一个？,而且可选参数必须配置到参数列表的最后面
function getInfo2(name: string, age?: number): string{
    if (age) {
        return `${name} ---- ${age}`;
    } else {
        return `${name} ---- 年龄保密`;
    }
}
console.log(getInfo2("张三"));

// 2.2默认参数，在ES5中没法设置默认参数，在ES6和TS中都可以设置默认参数
// 调用函数时，可以不为默认参数赋值，这时候将会使用默认参数默认的值，而调用函数时赋值了，则会覆盖默认的值
function getInfo3(name: string, age: number = 20):string {
    return `${name} --- ${age}`;
}
console.log(getInfo3("李四"));

// 2.3剩余参数
function sum(a: number, b: number, c: number, d: number): number{
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
// 使用ES6三点运算符来接收不确定个数的形参个数
function sum1(...numbers: number[]): number{
    let result: number = 0;
    for (let i: number = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}
console.log(sum1(1, 2, 3, 4, 5));
// 若三点运算符之前定义了参数，则后面的为剩余参数
function sum2(a: number, ...numbers: number[]): number{
    let result: number = a;
    for (let i: number = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}
console.log(sum2(1, 2, 3, 4, 5, 6));
console.log("----------");

// 3.函数的重载
// Java中函数的重载，是指两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
// TypeScript中的重载，通过为同一个函数提供多个函数类型定义来实现多种功能的目的
// TS为了兼容ES5和ES6，所以TS中函数重载的写法与Java有区别
/*
// ES5中如果有两个或以上同名的方法，则后声明的方法会替代先声明的方法
function fun(config){

}
function fun(config, value){

}
*/
// 相同参数个数
function getIdInfo(name: string): string;
function getIdInfo(age: number): string;
function getIdInfo(str: any): any{
    if (typeof str === 'string') {
        return `我叫：${str}`;
    } else {
        return `十年后，我的年龄：${str + 10}`;
    }
}
console.log(getIdInfo('张三'));
console.log(getIdInfo(23));
// 不同参数个数，实际上后面的参数是可选参数
function getIdInfo1(name: string): string;
function getIdInfo1(name: string, age: number): string;
function getIdInfo1(name: string, age?: number): string{
    if (age) {
        return `我叫${name}，年龄${age}`;
    } else {
        return `我叫${name}`;
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
setTimeout(() => {
    console.log("run");
}, 1000);
