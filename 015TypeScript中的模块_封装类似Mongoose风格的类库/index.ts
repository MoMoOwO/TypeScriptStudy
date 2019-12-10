// 引入user数据库操作相关模块
import { UserClass, UserModel } from "./model/user";
// 实例化User类
let user = new UserClass();
user.userName = "张三";
user.passWord = "123_abc";
// 使用UserModel将数据添加到数据库中
UserModel.add(user);
// 获取数据
let res = UserModel.get(123);
console.log(res);

// 引入Article的数据库操作
import { ArticleClass, ArticleModel } from "./model/article";
// 实例化article类
let article = new ArticleClass("标题呀", "内容呀");
ArticleModel.add(article);
console.log(ArticleModel.get(12));