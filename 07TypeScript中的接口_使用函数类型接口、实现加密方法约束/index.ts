// TypeScript接口-函数类型接口
// 对方法传入的参数以及返回的值进行约束

// 实现一个加密的函数类型接口
interface encrypt{
    // 括号内为参数列表的类型约束，后面为返回值类型的约束
    (key: string, value: number): string;
}

let md5: encrypt = function (key: string, value: number): string{
    // 模拟加密操作
    return key + value;
}
console.log(md5("xyz", 123));

// 批量约束不同的方法
let sha1: encrypt = function (key: string, value: number): string{
    return `${key}---${value}`;
}
console.log(sha1("李四", 432));