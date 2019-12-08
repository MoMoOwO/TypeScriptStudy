// TypeScript中的泛型
// 1.泛型定义
/*
    泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，
    同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

    在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，
    这样用户就可以以自己的数据类型来使用组件。

    通俗理解，反省就是解决类、接口、方法的复用性，以及对不特定数据类型的支持(数据类型校验)。
*/
// ts中定义一个方法
/* function getData(value: string): string{
    return value;
} */

// 同时返回string和number类型 (代码冗余)
/* function getData1(value: string): string{
    return value;
}
function getData2(value: number): number{
    return value;
} */

// 返回值为any类型，来返回任意类型  any可以减少代码冗余，但是放弃了类型检查
function getData3(value: any): any{
    return value;
}
console.log(getData3("abc"));
console.log(getData3(123));

//  any类型放弃了类型检查，我们需求时传入什么返回什么：比如传入number类型必须返回number，传入string类型必须赶回string类型
// 使用any则传入传出类型可以不一致
// 使用泛型，可以支持不特定的数据类型，要求传入的数据和返回的数据一致
// 定义泛型
// 在声明函数时在参数列表前加上<T>，T就表示是泛型，具体什么类型是调用这个方法的时候决定的
function getData4<T>(value: T): T{
    return (value);
}
console.log(getData4<number>(123)); // 指定泛型为数值型：传入参数和返回值都为number类型
console.log(getData4<boolean>(true)); // 指定泛型为布尔型：传入参数和返回值都为boolean类型

// 当然泛型可以只单独指定传入参数类型但是不能单独指定返回值类型
function getInfo1<T>(name: T, age: number): any {
    return {
        name,
        age
    }
}
console.log(getInfo1<string>("张三", 39));
/* function getInfo2<T>(name: string, age: number): T{
    return `${name}, ${age}`; // 报错
} */

console.log("---------");


// 2.泛型类
// 需求：有个最小堆算法，需要同时支持返回数字和字母(A-Z)两种类型，通过类的泛型来实现
class MinClass{
    list: number[] = [];
    add(num: number): void {
        this.list.push(num);
    }
    findMin(): number{
        let min = this.list[0];
        for (let i: number = 0; i < this.list.length; i++){
            this.list[i] < min ? (min = this.list[i]) : (min = min);
        }
        return min;
    }
}

let m: MinClass = new MinClass();
m.add(23);
m.add(32);
m.add(65);
m.add(56);
console.log(m.findMin());

// 类的泛型需要在类名后加上<T>来表示，类型在实例化类的对象时进行指定
class CMin<T>{
    list: T[] = [];
    add(value: T): void{
        this.list.push(value);
    }
    findMin(): T{
        let min = this.list[0];
        for (let i: number = 0; i < this.list.length; i++){
            this.list[i] < min ? (min = this.list[i]) : (min = min);
        }
        return min;
    }
}
let charArr: CMin<string> = new CMin(); // 实例化一个实例并指定泛型类型
charArr.add("A");
charArr.add("Z");
charArr.add("T");
charArr.add("D");
console.log(charArr.findMin());

let numArr: CMin<number> = new CMin();
numArr.add(123);
numArr.add(234);
numArr.add(342);
numArr.add(432);
console.log(numArr.findMin());
