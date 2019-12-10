"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export default默认到处：每个模块可以有一个default导出。默认导出使用default关键字标记；
// 并且一个模块只能够有一个default导出。需要使用一种特殊的导入形式
function sayHello() {
    console.log("Hellow Modules！");
}
exports.default = sayHello;
