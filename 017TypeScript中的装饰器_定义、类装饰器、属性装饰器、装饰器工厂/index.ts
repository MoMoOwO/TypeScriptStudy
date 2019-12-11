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

// 1.类装饰器：类装饰器在类声明之前被声明(仅靠着类声明)。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。
// 1.1类装饰器，普通装饰器，无法传参
// 定义一个类装饰器与定义一个方法一样
function logClass(params: any){
    console.log(params); // params就指向了当前的类
    // 可以通过prototype属性来扩展类上的属性和方法，prototype是原型链
    params.prototype.apiUrl = "localhost://207107:";
    params.prototype.run = function (): void{
        console.log("我是扩展的run方法");
    }
}

// 使用@符号来用装饰器
@logClass
class HttpClient{
    constructor(){
    
    }
    getData() {
        
    }
}

// 实例化HttpClient类
let http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
console.log("----------");


// 1.2类装饰器，装饰器工厂，可传参
function logClass1(params: string) {
    return function (target: any): void {
        console.log(target); // target指向装饰的类
        console.log(params); // params为当前传递的参数
        // 通过修饰器工厂传递参数之后就可以通过参数来进行不同的操作
        target.prototype.apiUrl = params;
    }
}
 // 在装饰类的时候传递参数
@logClass1("http://localhost:3000/data")
class HttpClient1{
    constructor() {
        
    }
    getData() {
        
    }
}
let http1: any = new HttpClient1();
console.log(http1);
console.log(http1.apiUrl);
console.log("---------");


// 1.3类装饰器，通过类装饰器重载类的构造函数和方法
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数；
// 如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
// 定义一个装饰器
function decoratorClass(target: any) {
    console.log(target);
    // 重载构造函数和方法
    return class extends target{
        type: any = "我是修改后的type";
        getInfo() {
            console.log(this.type + "-----");
        }
    }
}

@decoratorClass
class Animal{
    type: string | undefined;
    constructor() {
        this.type = "我是构造函数里面的type";
    }
    getInfo(): void {
        console.log(this.type);
    }
}
let animal = new Animal();
animal.getInfo();
console.log("--------------");


// 2.属性装饰器
/* 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
    第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。 第二个参数：成员的名字。
*/
// 类装饰器
function personDecorator(params: string) {
    return function (target: any) {
        //console.log(params);
        //console.log(target);
    }
}
// 属性装饰器
function propertyDecorator(params: any) {
    if (params === "instance") {
        return function (target: any, attr: string): void{
            console.log(params); // 传递的参数
            console.log(target); // 当前是实例成员的属性，所以target指向类的原型对象prototype
            console.log(attr); // 属性名
            target[attr] = "修改后的name";
        }
    } else {
        return function(target: any, attr: string): void{
            console.log(params); // 传递的参数
            console.log(target); // 当前是静态成员的属性，所以target指向类的构造函数
            console.log(attr); // 属性名
            target[attr] = "动物";
        }
    }
    
}
@personDecorator("xxx")
class Person{
    // 使用属性装饰器 修饰实例属性
    @propertyDecorator("instance")
    name: string | undefined;
    // 使用属性装饰器 修饰静态属性
    @propertyDecorator("static")
    static type: "动物";
    constructor() {
    
    }
    getInfo() {
        console.log(this.name);
    }
}
let p = new Person();
//p.getInfo();
console.log(p.name);
console.log(Person.type);


