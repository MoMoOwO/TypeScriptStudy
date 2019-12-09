// TypeScript中的泛型

// 函数接口
interface ConfigFn{
    (value1: string, value2: string): string;
}
// 实现函数接口
let getData1: ConfigFn = function (value1: string, value2: string): string{
    return value1 + value2;
}
console.log(getData1("你好，" , "TypeScript！"));

// 3.泛型接口-方式1
interface Config{
    // 定义函数类型接口时，需要在函数的约束前使用<T>声明泛型，接下来便可以使用泛型T
    <T>(value: T): T;
}
// 使用函数泛型接口初始化一个函数
let getData: Config = function <T>(value: T): T{
    return value;
}
// 函数泛型接口，泛型的确定是在调用实现函数泛型接口的函数的时候确定的
console.log(getData<string>("哈哈！"));

// 泛型接口-方式2
// 第二种实现泛型接口的方式是在声明接口名后跟<T>来指定泛型T
interface Model<T>{
    (value: T): T;
}
// 使用这种方式实现的泛型接口，泛型在函数声明时确定泛型的类型
let getInfo: Model<string> = function (value: string): string{
    return value;
}
console.log(getInfo("嘻嘻！"));