"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 引入db操作数据库
var db_1 = require("../modules/db");
// 定义数据库的映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
// 将数据库映射类与数据库操作类 规范数据库操作
var UserModel = new db_1.MySql();
exports.UserModel = UserModel;
