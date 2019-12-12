// TypeScript中的装饰器
// 3.方法装饰器  它会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法的定义
/**
 * 方法装饰会在运行时传入下列三个参数：
 * 第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 第二个参数：成员的名字
 * 第三个参数：成员的属性描述符
 */
// 装饰器
function get(params: string) {
    if (params === "普通"){
        return function (target: any, methodName: string, desc: any) {
            console.log(target); // 实例方法指向原型对象
            console.log(methodName); // 当前装饰方法的名称
            console.log(desc); // 方法描述，其中value属性就是当前装饰的方法 
    
            // 1.利用方法装饰器中的第一个参数来扩展类属性和方法
            target.apiUrl = "http://localhost:8080";
            target.run = function () {
                console.log("我是扩展的run方法");
            }
        }
    } else {
        return function (target: any, methodName: string, desc: any) {
            // 2.利用desc的value属性修改类中方法
            // 2.1.保存当前的方法
            var oldMethod = desc.value;
            // 2.2.修改方法
            desc.value = function (...args: any[]) {
                args = args.map((item: any) => {  // 遍历参数列表，将所有参数转换为字符串
                    return String(item);
                });
                console.log(args);
                // 2.3使用对象冒充的方式来修改方法
                oldMethod.apply(this, args);
            }
        }
    }
    
}
class HttpClient{
    url: string | undefined;
    constructor(){
    }
    @get("普通")
    getData() {
        console.log(this.url);
    }
    @get("修改方法")
    getInfo(...args: any[]) {
        console.log(args);
        console.log("我是getInfo方法");
    }
}
let http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
console.log("--");
http.getInfo(123, true, "111dd"); // 执行装饰器修改的方法
console.log("----------");

// 方法参数装饰器
/**
 * 方法参数装饰器：
 * 方法参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型只能加一些元素数据，
 * 传入以下三个参数：
 * 第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 第二个参数：方法的名称
 * 第三个参数：参数在函数参数列表中的索引
 */
// 定义一个装饰器
function paramsDecorator(params: any) {
    return function (target: any, methodName: any, paramsIndex: number) {
        console.log(params); // 调用装饰器时传递的参数
        console.log(target);  // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log(methodName); // 方法的名称
        console.log(paramsIndex); // 方法参数在参数列表中的索引

        // 可以通过taget参数来扩展类的属性和方法
        target.addAttr = params;
    }
}

class Animal{
    type: string | undefined;
    constructor() {
        
    }
    // 方法参数装饰器与其他装饰器类似，只需要在参数前面加上@装饰器的名称即可
    eat(@paramsDecorator("扩展的属性") food: string):void {
        console.log("吃" + food);
    }
}

let an: any = new Animal();
an.eat("食物");
console.log(an.addAttr);
console.log("-------------");

// 类装饰器、属性装饰器、方法装饰器、方法参数装饰器的执行顺序：
// 属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器，多个同类型的装饰器从后往前执行
// 类装饰器
function logClass1(params: string) {
    return function (target: any) {
        console.log("类装饰器1");
    }
}
function logClass2(params: string) {
    return function (target: any) {
        console.log("类装饰器2");
    }
}
// 属性装饰器
function logAttribute(params: string) {
    return function (target: any, attrName: string) {
        console.log("属性装饰器");
    }
}
// 方法装饰器
function logFunction(params: string) {
    return function (target: any, methodName: string, desc: any) {
        console.log("方法装饰器");
    }
}
// 方法参数装饰器
function logParams1() {
    return function (target: any, methodName: string, paramsIndex: number) {
        console.log("参数装饰器1");
    }
}
function logParams2() {
    return function (target: any, methodName: string, paramsIndex: number) {
        console.log("参数装饰器2");
    }
}
@logClass1("我是类装饰器1")
@logClass2("我是类装饰器2")
class Demo{
    @logAttribute("我是属性装饰器")
    demoAttr: string | undefined;
    constructor() {
        
    }
    @logFunction("我是方法装饰器呀")
    getData() {
        console.log("DemoFunction");
    }
    setData(@logParams1() attr1: any, @logParams2() attr2: any) {
        
    }
}

