// export default默认导出：每个模块可以有一个default导出。默认导出使用default关键字标记；
// 并且一个模块只能够有一个default导出。需要使用一种特殊的导入形式
function sayHello(): void{
    console.log("Hello Modules！");
}
export default sayHello;