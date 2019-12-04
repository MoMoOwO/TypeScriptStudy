// TypeScript中的类 静态属性、静态方法、抽象类、多态
/* 
// ES5中的静态方法和静态属性
function Person(name) {
    // 实例属性
    this.name = name;
    // 实例方法
    this.run = function () { };
}
// 静态方法
Person.say = function () { };
// 静态属性
Person.age = 14;

let p = new Person("aaa"); // 实例化Person对象
console.log(p.name); // 调用实例属性
p.run(); // 调用实例方法
console.log(Person.age); // 调用静态属性
Person.say(); // 调用静态方法 */

// 静态属性与静态方法
class Person{
    // 实例属性
    name: string;
    // 使用static关键字修饰的属性为静态属性
    static age: number = 20;
    constructor(name: string) {
        this.name = name;
        //this.age = age;
    }
    // 实例方法
    run() {
        console.log('在跑步！');
    }
    // 使用static关键字修饰的方法为静态方法
    static work() {
        console.log('在工作！');
        console.log(this.age); // 静态方法里只能调用静态属性，静态属性只能在类内的静态方法中调用
    }
}
let p = new Person("张三");
p.run(); // 调用实例方法
Person.work(); // 调用静态方法
console.log("---------");

// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现 多态也是继承的一种表现
class Animal{
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    eat() { // 父类定义方法，不实现
        
    }
}
class Dog extends Animal{
    constructor(type: string) {
        super(type);
    }
    eat() { // 子类实现父类定义了未实现的方法
        console.log('狗啃骨头！');
    }
}
class Cat extends Animal{
    constructor(type: string) {
        super(type);
    }
    eat() { // 不同的子类可以有不同的实现
        console.log('猫吃鱼！');
    }
}
let dog: Dog = new Dog("犬科");
dog.eat();
let cat: Cat = new Cat("猫科");
cat.eat();
console.log("---------");

// 抽象类：TS中的抽象类，是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须都在派生类中实现
// abstract抽象方法只能放到抽象类里面
// 抽象类和抽象方法用来定义标准
abstract class Camera{  // 抽象类
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    abstract takePhoto(): any; // 抽象方法
    fun() {
        console.log('其他方法在子类中不必实现！');
    }
}
//let c = new Camera(); // 抽象类不能直接实例化
class DigitalCamera extends Camera{
    constructor(type: any) {
        super(type)
    }
    takePhoto() { // 抽象类的子类必须实现抽象类中的抽象方法
        console.log(this.type + '拍了一张数字照片！');
    }
}
class FileCamera extends Camera{
    constructor(type: any) {
        super(type)
    }
    takePhoto() {
        console.log(this.type + '拍了一张黑白照片！');
    }
    getType() {
        console.log(this.type);
    }
}

let dc: DigitalCamera = new DigitalCamera("数字相机");
dc.takePhoto();
let fc: FileCamera = new FileCamera("数字相机");
fc.takePhoto();