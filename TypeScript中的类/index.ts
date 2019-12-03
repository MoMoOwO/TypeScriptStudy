// TypeScript中的类
/*
// ES5
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name + "在奔跑!");
    }
}
var p = new Person("张三", 36);
p.run(); */
// 1.类的定义 使用class关键字
class Person{
    name: string; // 属性 前面省去public
    age: number;
    constructor(name: string, age: number) {  // 构造函数，实例化类的时候触发的方法
        this.name = name;
        this.age = age;
    }
    // 方法
    run(): void {
        console.log(this.name + "在奔跑！");
    }
    getInfo(): void {
        console.log(`姓名：${this.name}，年龄：${this.age}`);
    }
    getName(): string{
        return this.name;
    }
    setName(name: string): void{
        this.name = name;
    }
}
let p: Person = new Person("张三", 29);
p.run(); // 张三在奔跑！
p.setName('李四');
console.log(p.getName()); // 李四
p.getInfo(); // 姓名：李四，年龄：29
console.log("---------");

// 2.TS中实现类的继承：extends、super关键字
// 定义Student类继承自Person类
class Student extends Person{  // 使用extends关键字指定继承的父类
    grade: number; // 子类新增属性
    constructor(name: string, age: number, grade: number) {
        super(name, age); // 通过super关键字调用父类构造函数初始化继承的name、age属性
        this.grade = grade; // 初始化新增属性
    }
    // 新增的方法
    study() {
        console.log(`${this.grade}年级的${this.name}在学习！`);
    }
    // 重写父类中继承的方法
    getInfo(): void{
        console.log(`姓名：${this.name}，年龄：${this.age}，年级：${this.grade}`);
    }
}
let s: Student = new Student("大明", 14, 1);
// 调用继承的方法
s.run(); // 大明在奔跑！
s.study(); // 1年级的大明在学习！
s.getInfo(); // 姓名：大明，年龄：14，年级：1
console.log("----------");

// 3.TS中类里面的修饰符：TypeScript类里面定义属性的时候为我们提供了三种修饰符
/*
    public：公用类型，在类里面、子类、类外都可以访问
    protected：保护类型，在类里面、子类可以访问，在类外不可访问
    private：私有类型，在类里可以访问，在子类和类外都不可访问。
    属性如果不加修饰符默认public
*/
class Animal{
    public type: string; // 公有属性
    protected home: string; // 保护类型
    private bool: boolean; // 私有类型
    constructor(type: string, home: string, bool: boolean) {
        this.type = type;
        this.home = home;
        this.bool = bool;
    }
    eat() {
        console.log('吃东西！');
    }
    getInfo() {
        // 在类内部可以访问自身的任何类型的属性
        console.log(this.type, this.home, this.bool);
    }
}
class Dog extends Animal{
    legs: number;
    constructor(type: string, home: string, bool: boolean, legs: number) {
        super(type, home, bool);
        this.legs = legs;
    }
    eat() {
        console.log("狗啃骨头！");
    }
    getHome() {
        // 在子类中调用父类受保护的属性
        console.log(this.home);
    }
    getBool() {
        // 在子类中无法访问父类私有属性
        //console.log(this.bool);
    }
}
let d = new Dog("犬科", "人类生活空间", true, 4);
// 子类中调用公有属性
console.log(d.type);
// 在类外使用公用属性
let a = new Animal("动物", "地球", false);
console.log(a.type);

// 子类中调用保护属性
d.getHome();
// 子类的实例无法调用父类受保护的属性
//console.log(d1.home);
// 父类的实例也无法直接访问受保护的属性，实际上都是外部无法访问受保护的属性
//console.log(a.home);

// 在类外无法访问类的私有属性
//console.log(d.bool);
//console.log(a.bool);
