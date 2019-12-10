"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = "";
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
