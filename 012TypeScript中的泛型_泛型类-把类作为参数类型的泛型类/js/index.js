"use strict";
// TypeScript中的泛型
// 泛型类-把类作为参数类型的泛型类
// 普通的泛型类
// 求元素数组中的最小值
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.getMin = function () {
        var min = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            min > item ? (min = item) : (min = min);
        }
        return min;
    };
    return MinClass;
}());
var numArr = new MinClass();
numArr.add(123);
numArr.add(213);
numArr.add(321);
console.log(numArr.getMin());
var strArr = new MinClass();
strArr.add("G");
strArr.add("I");
strArr.add("P");
console.log(strArr.getMin());
console.log("-------");
// 泛型：泛型可以帮助我们避免重复的代码以及对不特定的数据类型的支持(类型检验)，下面我们看看把类当作参数的泛型类
// 1.定义类，2.把类作为参数来约束数据传入的类型
/*
    定义一个user的类，这个类的作用就是映射数据库的字段；
    然后定一个一个MysqlDB的类，这个类用于操作数据库；
    然后把user类作为参数传入到mySqlDB类中
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 若要在定义一个添加文章内容的类，则在DB类中需要再重复声明一个类似的添加数据库逻辑的方法
var Articla = /** @class */ (function () {
    function Articla() {
    }
    return Articla;
}());
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
    }
    MySqlDB.prototype.addUser = function (user) {
        console.log(user);
        return true;
    };
    MySqlDB.prototype.addArticle = function (article) {
        console.log(article);
        return true;
    };
    return MySqlDB;
}());
var user1 = new User();
user1.userName = "张三";
user1.passWord = "12345";
var DB = new MySqlDB();
DB.addUser(user1);
var article = new Articla();
article.title = "马云掉了100万！";
article.desc = "国内新闻";
article.status = 1;
DB.addArticle(article);
console.log("-----------");
// 把类作为参数来约束数据传入的类型
// 定义一个Goods类，对数据库进行映射
var Goods = /** @class */ (function () {
    function Goods() {
    }
    return Goods;
}());
// 定义一个Animal类，对数据库进行映射
var Animal = /** @class */ (function () {
    function Animal(params) {
        this.type = params.type;
        this.size = params.size;
        this.home = params.home;
    }
    return Animal;
}());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.add = function (table) {
        console.log(table);
        return true;
    };
    Database.prototype.update = function (table) {
        console.log(table);
        return true;
    };
    return Database;
}());
// 创建Goods实例对象并添加到数据库
var go = new Goods();
go.id = 12;
go.name = "酸奶";
go.amount = 123;
var DBs = new Database(); // 声明数据库对象并指定泛型类型
DBs.add(go);
// 创建Animal对象添加到数据库
var an = new Animal({ type: "犬科", size: "中等", home: "陆地生活环境" });
var DBss = new Database();
DBss.add(an);
// 更新数据库Animal
DBss.update(an);
