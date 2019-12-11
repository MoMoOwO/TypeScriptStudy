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

