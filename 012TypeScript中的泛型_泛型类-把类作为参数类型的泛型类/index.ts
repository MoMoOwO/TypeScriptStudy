// TypeScript中的泛型
// 泛型类-把类作为参数类型的泛型类

// 普通的泛型类
// 求元素数组中的最小值
class MinClass<T>{
    list: T[] = [];
    add(value: T): void{
        this.list.push(value);
    }
    getMin(): T{
        let min = this.list[0];
        for (let item of this.list) {
            min > item ? (min = item) : (min = min);
        }
        return min;
    }
}

let numArr: MinClass<number> = new MinClass<number>();
numArr.add(123);
numArr.add(213);
numArr.add(321);
console.log(numArr.getMin());

let strArr: MinClass<string> = new MinClass<string>();
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
class User{
    userName: string | undefined;
    passWord: string | undefined;
}
// 若要在定义一个添加文章内容的类，则在DB类中需要再重复声明一个类似的添加数据库逻辑的方法
class Article{
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
}
class MySqlDB{
    addUser(user: User): boolean{
        console.log(user);
        return true;
    }
    addArticle(article: Article): boolean{
        console.log(article);
        return true;
    }
}
let user1 = new User();
user1.userName = "张三";
user1.passWord = "12345";
let DB = new MySqlDB();
DB.addUser(user1);

let article = new Article();
article.title = "马云掉了100万！";
article.desc = "国内新闻";
article.status = 1;
DB.addArticle(article);
console.log("-----------");


// 把类作为参数来约束数据传入的类型
// 定义一个Goods类，对数据库进行映射
class Goods{
    id: number | undefined;
    name: string | undefined;
    amount: number | undefined;
}
// 定义一个Animal类，对数据库进行映射
class Animal{
    type: string | undefined;
    size: string | undefined;
    home: string | undefined;
    constructor(params: {
        type: string | undefined,
        size: string | undefined,
        home: string | undefined
    }) {
        this.type = params.type;
        this.size = params.size;
        this.home = params.home;
    }
}
class Database<T>{
    add(table: T): boolean{
        console.log(table);
        return true;
    }
    update(table: T): boolean{
        console.log(table);
        return true;
    }
}
// 创建Goods实例对象并添加到数据库
let go = new Goods();
go.id = 12;
go.name = "酸奶";
go.amount = 123;
let DBs = new Database<Goods>(); // 声明数据库对象并指定泛型类型
DBs.add(go);

// 创建Animal对象添加到数据库
let an = new Animal({ type: "犬科", size: "中等", home: "陆地生活环境"});
let DBss = new Database<Animal>();
DBss.add(an);
// 更新数据库Animal
DBss.update(an);


