import { MSSqlDB } from "../modules/db";

class ArticleClass{
    title: string | undefined;
    content: string | undefined;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

// 实例化MSSqlDB对象
let ArticleModel = new MSSqlDB<ArticleClass>();

// 暴漏
export { ArticleClass, ArticleModel };