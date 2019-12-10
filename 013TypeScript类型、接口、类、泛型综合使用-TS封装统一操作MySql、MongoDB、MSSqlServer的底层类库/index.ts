/*
 * 功能：定义一个操作数据库的库，支持MySql、MongoDB、MSSqlServer
 * 要求：MySql、MSSqlServer、MongoDB共鞥你一样，都有add、update、delete、get方法
 * 注意：约束统一的规范，以及代码重用 
 * 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
 *  1. 接口：在面向对象的变成张，接口是一种规范的定义，它定义了行为和动作的规范
 *  2. 泛型：通俗理解，反省就是解决类、接口、方法的复用性
 */

// 定义接口
interface DBI<T>{
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

// 定义一个操作MySql数据库的类   注意要实现泛型接口，这个类也应该是一个泛型类
class MySql<T> implements DBI<T>{
    constructor() {
        console.log("数据库建立链接...");
    }
    add(info: T): boolean {
        console.log("MySql", info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number) {
        let list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MySql"
            }
        ];
        return list;
    }
}

// MSSqlServer
class MSSQlDB<T> implements DBI<T> {
    add(info: T): boolean {
        console.log("MSSql", info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MSSql"
            }
        ];
        return list;
    }
}

// 定义一个user类与数据库表做映射
class User{
    userName: string | undefined;
    passWord: string | undefined;
}
// 实例化user实例
let user1 = new User();
user1.userName = "张三";
user1.passWord = "123abc";
// 实例化MySql实例
let mysql = new MySql<User>();  // 限制传入类型，类的传入参数的合法性校验
mysql.add(user1);
console.log(mysql.get(3));

// 实例化MSSQL对象实例
let mssql = new MSSQlDB<User>();
mssql.add(user1);
console.log(mssql.get(5));
