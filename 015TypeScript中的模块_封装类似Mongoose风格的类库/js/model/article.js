"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var ArticleClass = /** @class */ (function () {
    function ArticleClass(title, content) {
        this.title = title;
        this.content = content;
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
// 实例化MSSqlDB对象
var ArticleModel = new db_1.MSSqlDB();
exports.ArticleModel = ArticleModel;
