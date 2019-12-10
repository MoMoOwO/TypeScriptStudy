// TypeScript中的模块化
/**
    模块的概念(官方)：关于术语的一点说明：请务必注意一点，TypeScript1.5里术语名已经发生了变化。“内部模块”现在称为“命名空间”，
    “外部模块”现在简称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里。
    这意味着定义在一个模块里的变量、函数、类等等在模块外部时不可见的，除非你明确的使用export形式之一导出它们。
    相反，如果想使用其他模块导出变量、函数、类、接口等的时候，你必须要导入它们，可以使用import形式之一。

    模块的概念(理解)：我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
    模块里面的变量、函数、类等默认是私有的如果我们要在外部访问模块里的数据(变量、函数、类)，
    我们需要通过export暴漏模块里面的数据(变量、函数、类)。
    暴漏后我们通过import引入模块就可以使用模块里面暴漏的数据(变量、函数、类)。

 */

import { dbUrl, getData, saveData } from './modules/db1'; // 使用import引入外部模块{}内为要引入的内容
console.log(getData());
console.log(dbUrl);
console.log(saveData([{ title: "标题3", content: "内容3" }]));

// 在import导入模块暴漏的数据的时候可以使用as关键字来简化变量名
import { DBUrl, getAllData as get, saveOneData } from './modules/db2';
console.log(DBUrl);
console.log(get());
console.log(saveOneData([{ title: "标题3-哈哈", content: "内容3-呵呵" }]));

// 引入通过export default默认导出暴漏的模块，直接引入即可
import sayHello from "./modules/db3";
sayHello();

// 引入数据库操作的模块
import { MSSqlDB } from "./modules/db-option";

class User{
    userName: string | undefined;
    passWord: string | undefined;
}
// 实例化user实例
let user1 = new User();
user1.userName = "张三";
user1.passWord = "123abc";
// 实例化MSSQL对象实例
let mssql = new MSSqlDB<User>();
mssql.add(user1);
console.log(mssql.get(5));