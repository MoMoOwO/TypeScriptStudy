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
