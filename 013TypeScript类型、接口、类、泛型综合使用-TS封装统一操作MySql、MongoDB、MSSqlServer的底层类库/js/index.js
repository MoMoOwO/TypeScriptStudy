"use strict";
/*
 * 功能：定义一个操作数据库的库，支持MySql、MongoDB、MSSqlServer
 * 要求：MySql、MSSqlServer、MongoDB共鞥你一样，都有add、update、delete、get方法
 * 注意：约束统一的规范，以及代码重用
 * 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
 *  1. 接口：在面向对象的变成张，接口是一种规范的定义，它定义了行为和动作的规范
 *  2. 泛型：通俗理解，反省就是解决类、接口、方法的复用性
 */
// 定义一个操作MySql数据库的类   注意要实现泛型接口，这个类也应该是一个泛型类
var MySql = /** @class */ (function () {
    function MySql() {
        console.log("数据库建立链接...");
    }
    MySql.prototype.add = function (info) {
        console.log("MySql", info);
        return true;
    };
    MySql.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySql.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySql.prototype.get = function (id) {
        var list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MySql"
            }
        ];
        return list;
    };
    return MySql;
}());
// MSSqlServer
var MSSQlDB = /** @class */ (function () {
    function MSSQlDB() {
    }
    MSSQlDB.prototype.add = function (info) {
        console.log("MSSql", info);
        return true;
    };
    MSSQlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MSSQlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MSSQlDB.prototype.get = function (id) {
        var list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MSSql"
            }
        ];
        return list;
    };
    return MSSQlDB;
}());
// 定义一个user类与数据库表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 实例化user实例
var user1 = new User();
user1.userName = "张三";
user1.passWord = "123abc";
// 实例化MySql实例
var mysql = new MySql(); // 限制传入类型，类的传入参数的合法性校验
mysql.add(user1);
console.log(mysql.get(3));
// 实例化MSSQL对象实例
var mssql = new MSSQlDB();
mssql.add(user1);
console.log(mssql.get(5));
