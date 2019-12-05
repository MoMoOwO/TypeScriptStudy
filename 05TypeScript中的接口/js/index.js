"use strict";
// TypeScript中的接口
/*
    接口的作用：在面向对象的编程中，接口是一种规范得定义，它定义了行为和动作得规范，在程序设计里面，接口起到一种限制和
    规范的作用。接口定义了某一批类所需要遵循得规范，接口不关心这些类的内部状态数据，也不关系这些类里面方法得实现细节，
    它只规定这批类里必须提供某些方法，提供这些方法得类就可以满足实际需要。
    TypeScript中接口类似于java中接口，同时还增加了更灵活得接口类型，包括：属性类接口、函数类接口、可索引接口
    和类类型接口、接口扩展等。
*/
// 1.属性接口 对传入的json对象进行约束
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
// printLabel("aaa"); // 报错
// printLabel(123); // 报错
printLabel(myObj);
function printName(name) {
    // 必须传入对象，必须传入firstName,secondName
    console.log(name.firstName + "\u00B7" + name.secondName);
}
// printName(123); // 报错
// printName({ age: 20 }); // 报错
printName({ firstName: '张', secondName: "三" }); // 直接传入对象，必须只包含约束的属性
var obj = {
    firstName: '李',
    secondName: "四",
    age: 39
};
printName(obj); // 传入对象变量名，外部对象可以包含除约束属性外其他属性值
// 1.2对批量方法传入参数进行约束
// 接口不仅能对行为和动作进行规范，还能对批量方法进行约束
function printInfo(info) {
    console.log(info.firstName + "·" + info.secondName);
}
printInfo({ firstName: "王", secondName: "五" });
function SayHello(info) {
    console.log(info.name + "说：" + info.words);
}
SayHello({ name: '张三' }); // 不传递可选属性
