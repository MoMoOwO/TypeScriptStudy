"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 以对象的形式，一次性暴漏
var DBUrl = "http://xxxx";
exports.DBUrl = DBUrl;
// 使用export将方法暴漏出去
function getAllData() {
    console.log("获取数据库的数据111");
    return [
        {
            title: '标题1-哈哈',
            content: '内容1-呵呵'
        },
        {
            title: '标题2-哈哈',
            content: '内容2-呵呵'
        }
    ];
}
exports.getAllData = getAllData;
function saveOneData(data) {
    console.log(data);
    return true;
}
exports.saveOneData = saveOneData;
