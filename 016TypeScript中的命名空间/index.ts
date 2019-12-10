// TypeScript中的命名空间

/**
 *  命名空间：在代码量较大的情况下，为了避免各种变量命名之间的冲突，可将相似功能的函数、类、接口等放置到命名空间内。
 *  同Java包，.Net命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴漏需要在外部
 *  访问的对象。命名空间内的对象通过export来暴漏数据
 *  
 *  命名空间和模块的区别：
 *      命名空间：内部模块，主要用于组织代码，避免命名冲突。
 *      模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
 */
// 定义命名空间A
namespace A{
    // 定义一个接口
    interface Animal{
        type: string;
        eat(): void;
    }
    // 定义两个类实现该接口    命名空间中的数据使用export关键自暴漏
    export class Dog implements Animal{
        type: string;
        constructor(type: string) {
            this.type = type;
        }
        eat():void {
            console.log("狗啃骨头！");
        }
    }
    export class Cat implements Animal{
        type: string;
        constructor(type: string) {
            this.type = type;
        }
        eat(): void {
            console.log("猫吃鱼！");
        }
    }
}

// 定义命名空间B,不同的命名空间内可以使用相同的变量名
namespace B{
    // 定义一个接口
    interface Animal{
        type: string;
        eat(): void;
    }
    // 定义两个类实现该接口
    export class Dog implements Animal{
        type: string;
        constructor(type: string) {
            this.type = type;
        }
        eat():void {
            console.log("狗啃骨头！");
        }
    }
    export class Cat implements Animal{
        type: string;
        constructor(type: string) {
            this.type = type;
        }
        eat(): void {
            console.log("猫吃鱼！");
        }
    }
}

// 在使用命名空间的时候需要使用命名空间.变量名的形式来使用命名空间中的数据
let dog = new A.Dog("犬科");
dog.eat();

let cat = new B.Cat("猫科");
cat.eat();

// 还可以将命名空间抽离到外面的模块里，使用的时候需要先引入模块
import { C, D } from "./modules/module";
console.log(C.a);
console.log(D.a);