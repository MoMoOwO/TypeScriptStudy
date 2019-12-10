"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 使用export关键字将MySql、MSSql数据库操作函数暴漏出去
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
exports.MySql = MySql;
// MSSqlServer
var MSSqlDB = /** @class */ (function () {
    function MSSqlDB() {
    }
    MSSqlDB.prototype.add = function (info) {
        console.log("MSSql", info);
        return true;
    };
    MSSqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MSSqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MSSqlDB.prototype.get = function (id) {
        var list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MSSql"
            }
        ];
        return list;
    };
    return MSSqlDB;
}());
exports.MSSqlDB = MSSqlDB;
