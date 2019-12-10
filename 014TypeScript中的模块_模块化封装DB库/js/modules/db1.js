"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 单独暴漏 -- 在每个要暴漏的变量、类、函数前加关键字export
exports.dbUrl = "localhost:27017";
// 使用export将方法暴漏出去
function getData() {
    console.log("获取数据库的数据111");
    return [
        {
            title: '标题1',
            content: '内容1'
        },
        {
            title: '标题2',
            content: '内容2'
        }
    ];
}
exports.getData = getData;
function saveData(data) {
    console.log(data);
    return true;
}
exports.saveData = saveData;
