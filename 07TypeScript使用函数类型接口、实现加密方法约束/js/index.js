"use strict";
// TypeScript接口-函数类型接口
// 对方法传入的参数以及返回的值进行约束
var md5 = function (key, value) {
    // 模拟加密操作
    return key + value;
};
console.log(md5("xyz", 123));
// 批量约束不同的方法
var sha1 = function (key, value) {
    return key + "---" + value;
};
console.log(sha1("李四", 432));
