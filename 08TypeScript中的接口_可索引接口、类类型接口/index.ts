// TypeScript中的接口-可索引接口、类类型接口

// 可索引接口：数组、对象的约束，不常用
// 在ts中定义数据的方式
/*S
let arr: number[] = [123, 45, 6];
let arr2: Array<string> = ["abc", "de", "f"];
*/
// 对数组的约束
interface UserArr{
    [index: number]: string;
}
let arr: UserArr = ["abc", "de", "f"]; // 数组索引就是数值型，数组值需要满足约束为字符串型
console.log(arr);
console.log(arr[0]);

// 对象的约束
interface UserObject{
    [index: string]: string;
}
let obj: UserObject = {
    name: "张三", // 对象要满足约束，键(index)为string，值为string
    age: "23"
}
console.log(obj);

console.log("-----------");

// 类类型接口-对类的约束，和抽象类有点类似
interface Animal{
    type: string;
    eat(str: string): void;
}
// 使用implements关键字来表示一个类实现某一个类接口，需要实现类接口中的所有属性和方法
class Dog implements Animal{
    type: string;
    constructor(type: string) {
        this.type = type;
    }

    eat() {
        console.log(this.type + "啃骨头！");
    }
}
let d = new Dog("狗");
d.eat();

class Cat implements Animal{
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    eat(str: string) {
        console.log(this.type + "吃" + str + "！");
    }
}
let c = new Cat("猫");
c.eat("鱼");