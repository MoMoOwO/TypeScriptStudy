// TypeScript中的接口——接口的扩展与继承
// ts中接口的扩展就是接口可以像类一样继承
interface Animal{
    type: string
    eat(foot: string): void;
}
// Person接口通过extends关键字继承Animal接口
interface Person extends Animal{
    work(): void;
}
class Workers implements Person{
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    eat(foot: string) {
        console.log(this.type + "吃" + foot + "！");
    }
    work() {
        console.log(this.type + "工作！");
    }
}
let w = new Workers("工人");
w.eat("员工餐厅");
w.work();
console.log("--------");

// 类可以同时继承父类又实现接口
class Programmer extends Workers implements Person{
    constructor(type: string) {
        super(type);
    }
    eat(foot: string) {
        console.log(this.type + "吃" + foot + "！");
    }
    work() {
        console.log(this.type + "工作！");
    }
    Coding() {
        console.log(this.type + "写代码！");
    }
}
let pro = new Programmer("程序员");
pro.Coding();