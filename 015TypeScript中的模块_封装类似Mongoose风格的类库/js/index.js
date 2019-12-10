"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 引入user数据库操作相关模块
var user_1 = require("./model/user");
// 实例化User类
var user = new user_1.UserClass();
user.userName = "张三";
user.passWord = "123_abc";
// 使用UserModel将数据添加到数据库中
user_1.UserModel.add(user);
// 获取数据
var res = user_1.UserModel.get(123);
console.log(res);
// 引入Article的数据库操作
var article_1 = require("./model/article");
// 实例化article类
var article = new article_1.ArticleClass("标题呀", "内容呀");
article_1.ArticleModel.add(article);
console.log(article_1.ArticleModel.get(12));
