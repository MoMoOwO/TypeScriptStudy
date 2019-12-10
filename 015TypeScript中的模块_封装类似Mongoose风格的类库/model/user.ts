// 引入db操作数据库
import { MySql } from "../modules/db";

// 定义数据库的映射
class UserClass{
    userName: string | undefined;
    passWord: string | undefined;
}

// 将数据库映射类与数据库操作类 规范数据库操作
let UserModel = new MySql<UserClass>();

// 将user类(数据库表映射)与Model(数据库从左实例)暴漏
export { UserClass, UserModel };
