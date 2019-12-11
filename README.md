# TypeScript 学习记录

## 简介

1. 跟随视频学习并记录笔记。

2. B 站[视频链接](https://www.bilibili.com/video/av38379328)

## TypeScript 介绍、安装、及开发工具

1. TypeScript 介绍
    - TypeScript 是由微软开发的一款开源的编程语言。TypeScript 是 JavaScript 的超集，遵循最新的 ES5、ES6 规范。 TypeScript 扩展了 JavaScript 的语法。  
     ES5、ES6和TypeScript的关系：
    ![ES5、ES6和TypeScript的关系](https://i.loli.net/2019/11/30/YN4w2FgBbmP9pW6.png)
    - TypeScript 更像后端 java、C# 这样面向对象语言，可以让 js 开发大型企业项目。谷歌也在大力支持 TypeScript 的推广，谷歌 的 angular2.x+就是基于 TypeScript 语法的；最新的 Vue、React 也可以继承 TypeScript。

2. TypeScript 安装与编译
    - 安装TypeScript需要使用npm，可通过安装Node.js来安装npm：[Node.js下载](https://nodejs.org/zh-cn/download/)
    - 使用npm安装TypeScript，打开cmd，输入命令：`npm install typescript -g` 若此步出错，尝试以管理员身份运行cmd
    - 编译一个ts文件：`tsc hellworld.ts`
3. 开发工具及配置
    - Visual Studio Code  
      (1) 在项目目录下运行命令：`tsc --init` 生成名为tsconfig.json的ts配置文件，修改文件中outDir的路径，该路径为编译成功的js文件的路径。  
      (2) VSCode标题栏：终端->运行->监视tsconfig.json，关于报错：`无法加载文件 .ps1，因为在此系统中禁止执行脚本`，解决方法：管理员身份运行powershell，输入`set-executionpolicy remotesigned`，随后输入Y回车确认。  
      (3) 随后ts代码修改后会自动编译为js文件，在html中正常引入即可使用。
    - HBuilder  
      (1) 在最上方菜单栏，点击工具->插件安装。  
      (2) 点击下方“浏览Eclipse插件市场”，搜索typescript插件进行安装。  
      (3) 安装完成之后重启编译器，点击菜单栏工具->选项，选择编译ts文件。  
      (4) 在项目上右键->配置->Enable TypeScript Builder，之后再保存.ts文件时会自动在当前目录编译出对应的.js文件。

## TypeScript入门内容

1. TypeScript中的数据类型  
    - TypeScript中为了是编写的代码更规范，更有利于维护，增加了类型校验(变量声明必须指定类型)，在TypeScript中主要给我们提供了以下的数据类型：布尔类型(boolean)、数字类型(number)、字符串类型(string)、数组类型(array)、元组类型(tuple)、枚举类型(enum)、任意类型(any)、null和undefined、void类型、never类型。增加了类型检验后一般的类型如string、number声明变量后，只能赋值为对应类型的值。  
    - 布尔类型boolean  
      语法：`var flag: boolean = false;`  
    - 数字类型number  
      语法：`var num: number = 123;`  
    - 字符串类型string  
      语法：`var str: string = 'abcd';`  
    - 数组类型array  
      TS中一般有三种常用的定义数组的方法：  

      ``` TypeScript
        // 第一种方式，指定单一元素类型的数组
        var arr1: number[] = [1, 2, 3, 4]; // 定义一个数值型数组
        // 第二种方式，指定单一元素类型的数组
        var arr2: Array<number> = [1, 2, 1, 3];
        // 第三种方式，指定元素为任意类型的数组
        let arr3: any[] = [1, true, 'str'];
      ```

    - 元组类型(tuple)，属于数组的一种，使用元组类型可以为数组指定位置规定数据类型  
      语法：`let tup: [number, string] = [1, 'abc'];`  
    - 枚举类型(enum)  
      随着计算机的不断普及，程序不仅只用于数值计算，还更广泛的用于处理非数值的数据。类如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其他程序设计语言中，一般用一个数值来代表某一状态，这样处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易圆度和理解。也就是说，事先考虑到某一变量可能取得值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法就称为枚举方法，用这种方法定义的类型称为枚举类型。  
      语法：  

      ``` TypeScript
        enum 枚举名{
            标识符[=整型常数],
            标识符[=整型常数],
            标识符[=整型常数],
            ...
            标识符[=整型常数]
        }
        // 如果标识符没有赋值，那么它的值就是下标(索引)

        // 枚举常用来定义状态码
        enum Err { 'undefined' = -1, 'null' = -2, success = 1 };
      ```  

    - 任意类型(any)：any类型的变量可以被修改为任意类型  
      语法：`let ss: any = 123;`  
    - null和undefined，是其他类型(never)的子类型  
      语法：  

      ``` TypeScript
        let und: undefined;
        console.log(und);  // undefined

        let nul: null = null;
        console.log(nul); // null

        // 一个元素可能是number、undefined、null
        let n1: number | null | undefined;
        n1 = 123;
        console.log(123);
      ```

    - void类型：TypeScript中void表示没有任何类型，一般用于定义方法且方法没有返回值的时候  
      语法：

      ``` TypeScript
        function fun(): void { // 表示该方法没有任何返回类型
            console.log("fun()");
        }
        fun(); // fun()
        function foo(): number {
            return 123;
        }
        console.log(foo()); // 123
      ```  

    - never类型 其他类型，(包含null和undefined)的子类型，代表从不会的出现的值，这意味着声明never的变量只能被never类型所赋值  
      语法：  

      ``` TypeScript
        let a: undefined;
        a = undefined;
        console.log(a);
        let b: null;
        b = null;
        console.log(null);

        let f: never;
        // f = 1323; // 报错
        // never类型可用来输出错误异常
        f = (() => { throw new Error('错误！'); })()
      ```  

2. TypeScript中的函数  
    - TS中定义函数的方法，基本与ES5类似，但是需要在声明方法时指定函数的返回值类型  
      (1) 函数声明法  

        ``` TypeScript
          function fun(): string {
              console.log("fun()");
              return 'fun()';
          }
          // 调用函数
          console.log(fun());
        ```

      (2) 匿名函数法  

        ``` TypeScript
          var fun2 = function(): number{
              console.log('fun2()');
              return 1;
          }
        ```

      (3) ts中定义带有参数的方法，参数列表必须指定参数类型，调用函数的时候也必须类型对应  

        ``` TypeScript
          function getInfo(name: string, age: number): string{
              return `${name} --- ${age}`;
          }
        ```

      (4) 定义没有返回值的方法  

        ``` TypeScript
          function bar(): void {
              console.log("bar()没有返回值");
          }
          bar();
        ```  

    - 函数的参数列表  
      (1) 可选参数，在ES5中实参和形参可以不一样，但是在TS中必须一样，如果不一样就需要配置可选参数，方式为在可选择是否传递的参数名后加一个`?`，而且可选参数必须配置到参数列表的最后面。  

        ``` TypeScript
          function getInfo(name: string, age?: number): string{
              if (age) {
                  return `${name} ---- ${age}`;
              } else {
                  return `${name} ---- 年龄保密`;
              }
          }
          console.log(getInfo("张三"));
        ```  

      (2) 默认参数，在ES5中没法设置默认参数，在ES6和TS中都可以设置默认参数；调用函数时，可以不为默认参数赋值，这时候将会使用默认参数默认的值，而调用函数时赋值了，则会覆盖默认的值  

        ``` TypeScript
          function getInfo3(name: string, age: number = 20):string {
              return `${name} --- ${age}`;
          }
          console.log(getInfo3("李四"));
        ```  

      (3) 剩余参数，使用ES6三点运算符来接收不确定个数的形参个数，若参数列表前面有一部分参数，则传参是按顺序为前面的形参赋值，剩余的参数为三点运算符变量赋值。  

        ``` TypeScript
          function sum(a: number, ...numbers: number[]): number{
              let result: number = a;
              for (let i: number = 0; i < numbers.length; i++){
                  result += numbers[i];
              }
              return result;
          }
          console.log(sum(1, 2, 3, 4, 5, 6));
        ```  

    - 函数的重载，Java中函数的重载，是指两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况；TypeScript中的重载，通过为同一个函数提供多个函数类型定义来实现多种功能的目的；TS为了兼容ES5和ES6，所以TS中函数重载的写法与Java有区别。  

      ``` TypeScript
        // 相同参数个数
        function getInfo(name: string): string;
        function getInfo(age: number): string;
        function getInfo(str: any): any{
            if (typeof str === 'string') {
                return `我叫：${str}`;
            } else {
                return `十年后，我的年龄：${str + 10}`;
            }
        }
        console.log(getInfo('张三'));
        console.log(getInfo(23));

        // 不同参数个数，实际上后面的参数是可选参数
        function getIdInfo(name: string): string;
        function getIdInfo(name: string, age: number): string;
        function getIdInfo(name: string, age?: number): string{
            if (age) {
                return `我叫${name}，年龄${age}`;
            } else {
                return `我叫${name}`;
            }
        }
        console.log(getIdInfo("张三"));
        console.log(getIdInfo("张三", 23));
      ```  

    - 箭头函数，与ES6的箭头函数相同  

      ``` TypeScript
        // 箭头函数中的this指向上下文
        setTimeout(() => {
            console.log("run");
        }, 1000);
      ```

3. TypeScript中的类  
    - ES5中的类与继承  
      ES5中没有专门定义类的方式，而是通过一个函数来实现。可以使用构造函数来声明一个类；可以在构造函数中指定类的属性和方法，也可以在原型在原型链上添加属性和方法，原型链上的属性会被多个实例共享，而构造函数中的则不会；还可以为构造函数指定静态方法，静态方法不属于任何实例，属于构造函数，调用的时候也是使用构造函数对象去调用。  
      ES5中的继承通常有两种方式：对象冒充继承、原型链继承；对象冒充继承可以继承构造函数中的属性和方法，而不能继承原型链上的属性和方法；原型链继承可以继承构造函数中和原型链上的属性和方法，但是无法从子类项父类传参；所以实际继承操作经常是使用对象冒充继承与原型链继承组合的方式。

    - TS中类的定义，class关键字  
      (1) TS中与高级面向对象语言类似，使用class关键字来定义一个类。  
      (2) 示例：

        ``` TypeScript
          class Person{
              name: string; // 属性，相比C#等语言前面省去public
              age: number;
              constructor(name: string, age: number) {  // 构造函数，实例化类的时候触发的方法,用来初始化属性值
                  this.name = name;
                  this.age = age;
              }
              // 方法
              run(): void {
                  console.log(this.name + "在奔跑！");
              }
              getInfo(): void {
                  console.log(`姓名：${this.name}，年龄：${this.age}`);
              }
              getName(): string{
                  return this.name;
              }
              setName(name: string): void{
                  this.name = name;
              }
          }
          let p: Person = new Person("张三", 29);
          p.run(); // 张三在奔跑！
          p.setName('李四');
          console.log(p.getName()); // 李四
          p.getInfo(); // 姓名：李四，年龄：29
        ```  

    - TS中类的继承：extends、super关键字  
      (1) TS中使用extends关键字来实现继承，使用super关键字来调用父类的构造函数进行参数初始化。  
      (2) 示例：  

        ``` TypeScript
          class Student extends Person{  // 使用extends关键字指定继承的父类
              grade: number; // 子类新增属性
              constructor(name: string, age: number, grade: number) {
                  super(name, age); // 通过super关键字调用父类构造函数初始化继承的name、age属性
                  this.grade = grade; // 初始化新增属性
              }
              // 新增的方法
              study() {
                  console.log(`${this.grade}年级的${this.name}在学习！`);
              }
              // 重写父类中继承的方法
              getInfo(): void{
                  console.log(`姓名：${this.name}，年龄：${this.age}，年级：${this.grade}`);
              }
          }
          let s: Student =W new Student("大明", 14, 1);
          // 调用继承的方法
          s.run(); // 大明在奔跑！
          s.study(); // 1年级的大明在学习！
          s.getInfo(); // 姓名：大明，年龄：14，年级：1
        ```

    - TS中类的里面的修饰符  
      (1) 若不加修饰符，则默认是public。三个修饰符与高级面向对象语言中的属性修饰符类似。  

        | 修饰符 | 说明 |
        | :-- | :-- |
        | public | 公有的，父类中使用public修饰的属性，在当前类、子类、类外都可以访问 |
        | protected | 受保护的，父类中使用protected修饰的属性，在当前类和子类中可以访问，在类外不可访问 |
        | private | 私有的，父类中使用private修饰的属性，在当前类可以访问，在子类和类外不可访问 |  

      (2) 示例：  

        ``` TypeScript
          class Animal{
              public type: string; // 公有属性
              protected home: string; // 保护类型
              private bool: boolean; // 私有类型
              constructor(type: string, home: string, bool: boolean) {
                  this.type = type;
                  this.home = home;
                  this.bool = bool;
              }
              eat() {
                  console.log('吃东西！');
              }
              getInfo() {
                  // 在类内部可以访问自身的任何类型的属性
                  console.log(this.type, this.home, this.bool);
              }
          }
          class Dog extends Animal{
              legs: number;
              constructor(type: string, home: string, bool: boolean, legs: number) {
                  super(type, home, bool);
                  this.legs = legs;
              }
              eat() {
                  console.log("狗啃骨头！");
              }
              getHome() {
                  // 在子类中调用父类受保护的属性
                  console.log(this.home);
              }
              getBool() {
                  // 在子类中无法访问父类私有属性
                  //console.log(this.bool);
              }
          }
          let d = new Dog("犬科", "人类生活空间", true, 4);
          // 子类中调用公有属性
          console.log(d.type);
          // 在类外使用公用属性
          let a = new Animal("动物", "地球", false);
          console.log(a.type);

          // 子类中调用保护属性
          d.getHome();
          // 子类的实例无法调用父类受保护的属性
          //console.log(d1.home);
          // 父类的实例也无法直接访问受保护的属性，实际上都是外部无法访问受保护的属性
          //console.log(a.home);

          // 在类外无法访问类的私有属性
          //console.log(d.bool);
          //console.log(a.bool);
        ```

    - TS中类的静态属性与静态方法，static关键字  
      (1) 在TS类中使用static修饰的属性和方法分别为静态属性和静态方法，静态属性和静态方法都属于类不属于对象，不能被对象的实例调用，静态方法只能类去调用，静态属性只能在类的静态方法中调用。  
      (2) 示例：  

        ``` TypeScript
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
        ```

    - TS中类的多态：  
      (1) 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现 多态也是继承的一种表现。  
      (2) 示例：  

        ``` TypeScript
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
        ```

    - TS中的抽象类  
      (1) 抽象类：TS中的抽象类，是提供其他类继承的基类，不能直接被实例化；用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须都在派生类中实现；abstract抽象方法只能放到抽象类里面；抽象类和抽象方法用来定义标准。  
      (2) 示例：

        ``` TypeScript
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
        ```

4. TypeScript中的接口
    - 接口的作用：在面向对象的编程中，接口是一种规范得定义，它定义了行为和动作得规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵循得规范，接口不关心这些类的内部状态数据，也不关系这些类里面方法得实现细节，它只规定这批类里必须提供某些方法，提供这些方法得类就可以满足实际需要。
    - TypeScript中接口类似于java中接口，同时还增加了更灵活得接口类型，包括：属性类接口、函数类接口、可索引接口
    和类类型接口、接口扩展等。TS中使用interface关键字来定义接口。
    - 属性类型接口，就是传入对象进行约束，属性约束。  
      (1) 使用interface关键字来定义一个对象属性约束，就是一个属性接口。方法的参数可以使用该接口类型进行数据约束。调用方法的时候直接传参，参数对象必须只包含约束属性，而传入对象变量名，则外部对象可以包含除约束对象之外的其他属性。  
        示例：  

        ``` TypeScript
          interface FullName{
              firstName: string; // 注意分号结束
              secondName: string;
          }
          function printName(name: FullName) {
              // 必须传入对象，必须传入firstName,secondName
              console.log(`${name.firstName}·${name.secondName}`);
          }
          // printName(123); // 报错
          // printName({ age: 20 }); // 报错
          printName({ firstName: '张', secondName: "三" }); // 直接传入对象，必须只包含约束的属性
          let obj = {
              firstName: '李',
              secondName: "四",
              age: 39
          }
          printName(obj); // 传入对象变量名，外部对象可以包含除约束属性外其他属性值
        ```  

      (2) 属性类型接口不仅能对行为和动作进行规范，还可以批量对其他方法进行参数约束。  
        示例：  

        ``` TypeScript
          // 使用FullName属性几口继续对printInfo方法进行参数约束
          function printInfo(info: FullName) {
              console.log(info.firstName + "·" + info.secondName);
          }
          printInfo({ firstName: "王", secondName: "五" });
        ```  

      (3) 属性类型接口定义的时候可以定义可选属性，那么在进行属性约束时，可以不约束该属性。  
        示例：

        ``` TypeScript
          interface Greeting{
              name: string;
              words?: string; // 接口可选属性
          }
          function SayHello(info: Greeting) {
              console.log(info.name + "说：" + info.words);
          }
          SayHello({ name: '张三' }); // 不传递可选属性
        ```

    - 函数类型接口，对函数传入的参数以及返回的值进行约束。  
      (1) 示例：  

      ``` TypeScript
        // 实现一个加密的函数类型接口
        interface encrypt{
            // 括号内为参数列表的类型约束，后面为返回值类型的约束
            (key: string, value: number): string;
        }

        let md5: encrypt = function (key: string, value: number): string{
            // 模拟加密操作
            return key + value;
        }
        console.log(md5("xyz", 123));
      ```  

      (2) 函数类型接口也可以批量实在在不同的函数中  

        ``` TypeScript
          // 批量约束不同的方法
          let sha1: encrypt = function (key: string, value: number): string{
              return `${key}---${value}`;
          }
          console.log(sha1("李四", 432));
        ```

    - 可索引接口，对数组和对象进行约束，不常用  
      示例：  

      ``` TypeScript
        // 对数组的约束
        interface UserArr{
            [index: number]: string;
        }
        let arr: UserArr = ["abc", "de", "f"]; // 数组索引就是数值型，数组值需要满足约束为字符串型
        console.log(arr);
        console.log(arr[0]);

        // 对象的约束
        interface UserObject{
            [index: string]: string;
        }
        let obj: UserObject = {
            name: "张三", // 对象要满足约束，键(index)为string，值为string
            age: "23"
        }
        console.log(obj);
      ```  

    - 类类型接口，对类进行约束，类类型接口的实现一般变量的事项方式不同需要使用implements关键字。  
      示例：  

      ``` TypeScript
        // 定义一个类接口
        interface Animal{
            type: string;
            eat(str: string): void;
        }
        // 使用implements关键字来表示一个类实现某一个类接口，需要实现类接口中的所有属性和方法
        class Dog implements Animal{
            type: string;
            constructor(type: string) {
                this.type = type;
            }

            eat() {
                console.log(this.type + "啃骨头！");
            }
        }
        let d = new Dog("狗");
        d.eat();

        class Cat implements Animal{
            type: string;
            constructor(type: string) {
                this.type = type;
            }
            eat(str: string) {
                console.log(this.type + "吃" + str + "！");
            }
        }
        let c = new Cat("猫");
        c.eat("鱼");
      ```  

    - 接口的扩展-继承，TS中的接口可以像类一样使用extends关键字进行接口的继承  
      (1) 示例：  

        ``` TypeScript
          // ts中接口的扩展就是接口可以像类一样继承
          interface Animal{
              type: string
              eat(foot: string): void;
          }
          // Person接口通过extends关键字继承Animal接口
          interface Person extends Animal{
              work(): void;
          }
          class Workers implements Person{
              type: string;
              constructor(type: string) {
                  this.type = type;
              }
              eat(foot: string) {
                  console.log(this.type + "吃" + foot + "！");
              }
              work() {
                  console.log(this.type + "工作！");
              }
          }
          let w = new Workers("工人");
          w.eat("员工餐厅");
          w.work();
          console.log("--------");
        ```  

      (2) TS中的类可以在继承父类的同时实现某一个接口  

        ``` TypeScript
          // 类可以同时继承父类又实现接口
          class Programmer extends Workers implements Person{
              constructor(type: string) {
                  super(type);
              }
              eat(foot: string) {
                  console.log(this.type + "吃" + foot + "！");
              }
              work() {
                  console.log(this.type + "工作！");
              }
              Coding() {
                  console.log(this.type + "写代码！");
              }
          }
          let pro = new Programmer("程序员");
          pro.Coding();
        ```

5. TypeScript中的泛型
    - 泛型的定义：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，这样用户就可以以自己的数据类型来使用组件。通俗理解，反省就是解决类、接口、方法的复用性，以及对不特定数据类型的支持(数据类型校验)。  
    - 函数中的泛型变量：  
      (1) 有时候我们需要函数的传入参数类型与返回值类型相同，这时候若为每个不同类型声明一个函数，则产生了代码冗余，使用any类型虽然能减少代码冗余，但是失去了变量的类型校验，而且还可以传入类型与返回类型不一致，所以我们需要使用泛型变量。使用方式为：在声明函数时在参数列表前加上`<T>`，T就表示泛型，具体是什么类型是在调用这个函数是决定的。  
      (2) 实例：  

        ``` TypeScript
          function getData<T>(value: T): T{
              return (value);
          }
          console.log(getData<number>(123)); // 指定泛型为数值型：传入参数和返回值都为number类型
          console.log(getData<boolean>(true)); // 指定泛型为布尔型：传入参数和返回值都为boolean类型
        ```

      泛型可以之单独制定传入参数类型，但是不能单独制定返回值类型  

        ``` TypeScript
          function getInfo1<T>(name: T, age: number): any {
              return {
                  name,
                  age
              }
          }
          console.log(getInfo1<string>("张三", 39));
          /* function getInfo2<T>(name: string, age: number): T{
              return `${name}, ${age}`; // 报错
          } */
        ```

    - 泛型类(类的泛型)  
      (1) 指定泛型类只需要在类名后添加`<T>`，在类内需要定义为泛型的变量使用T即可，类型的确定是在实例化类的对象的时候决定的。
      需求：有个最小堆算法，需要同时支持返回数字和字母(A-Z)两种类型，通过类的泛型来实现。  

        ``` TypeScript
          class CMin<T>{
              list: T[] = [];
              add(value: T): void{
                  this.list.push(value);
              }
              findMin(): T{
                  let min = this.list[0];
                  for (let i: number = 0; i < this.list.length; i++){
                      this.list[i] < min ? (min = this.list[i]) : (min = min);
                  }
                  return min;
              }
          }
          let charArr: CMin<string> = new CMin(); // 实例化一个实例并指定泛型类型
          charArr.add("A");
          charArr.add("Z");
          charArr.add("T");
          charArr.add("D");
          console.log(charArr.findMin());

          let numArr: CMin<number> = new CMin();
          numArr.add(123);
          numArr.add(234);
          numArr.add(342);
          numArr.add(432);
          console.log(numArr.findMin());
        ```

    - 泛型接口  
      (1) 方式一：定义函数类型接口时，在函数的约束前使用`<T>`声明泛型，之后便可以使用泛型T，本质上是函数泛型(泛型变量)实现的；此方式声明的泛型接口，泛型的确定实在调用实现函数泛型接口的函数时确定的。  

      ``` TypeScript
        // 泛型接口-方式1
        interface Config{
            // 定义函数类型接口时，需要在函数的约束前使用<T>声明泛型，接下来便可以使用泛型T
            <T>(value: T): T;
        }
        // 使用函数泛型接口初始化一个函数
        let getData: Config = function <T>(value: T): T{
            return value;
        }
        // 函数泛型接口，泛型的确定是在调用实现函数泛型接口的函数的时候确定的
        console.log(getData<string>("哈哈！"));
      ```  

    (2) 方式二：声明泛型接口时在接口名后跟`<T>`声明泛型，之后便可以使用泛型T；这种方式实现的泛型接口，泛型的确定是在定义实现该接口的函数时指定的。  

      ``` TypeScript
        // 泛型接口-方式2
        // 第二种实现泛型接口的方式是在声明接口名后跟<T>来指定泛型T
        interface Model<T>{
            (value: T): T;
        }
        // 使用这种方式实现的泛型接口，泛型在函数声明时确定泛型的类型
        let getInfo: Model<string> = function (value: string): string{
            return value;
        }
        console.log(getInfo("嘻嘻！"));
      ```

    - 泛型类，把类作为参数类型的泛型类  
      假设现在又一个需求：两个不同的类影射了数据库种不同的表的字段，定义一个数据库的操作类，封装了对数据库的不同操作；我们要求定义一个add方法就能往这两张不同的表中添加数据。这就需要把类作为参数类型，但是如果单一指定一中类类型时不行的，这又要借助泛型来解决。  

      ``` TypeScript
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
      ```

6. TypeScript中的模块与命名空间
    - 术语：关于术语的一点说明：请务必注意一点，TypeScript1.5里术语名已经发生了变化。“内部模块”现在称为“命名空间”，“外部模块”现在简称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里。这意味着定义在一个模块里的变量、函数、类等等在模块外部时不可见的，除非你明确的使用export形式之一导出它们。相反，如果想使用其他模块导出变量、函数、类、接口等的时候，你必须要导入它们，可以使用import形式之一。  
    - 模块的概念(理解)：我们可以把一些公共的功能单独抽离成一个文件作为一个模块。模块里面的变量、函数、类等默认是私有的如果我们要在外部访问模块里的数据(变量、函数、类)，我们需要通过export暴漏模块里面的数据(变量、函数、类)。暴漏后我们通过import引入模块就可以使用模块里面暴漏的数据(变量、函数、类)。  
    - 模块导出(暴漏)的方式：  
      (1) 方式1：通过export关键字逐一导出。  

        ``` TypeScript
          // 单独暴漏 -- 在每个要暴漏的变量、类、函数前加关键字export
          export let dbUrl = "localhost:27017";

          // 使用export将方法暴漏出去
          export function getData(): any[] {
              console.log("获取数据库的数据111");
              return [
                  {
                      title: '标题1',
                      content: '内容1'
                  },
                  {
                      title: '标题2',
                      content: '内容2'
                  }
              ]
          }
        ```  

      (2) 方式2：通过export关键字将要暴漏的数据以对象的形式一次性暴漏。  

        ``` TypeScript
          // 以对象的形式，一次性暴漏
          let DBUrl = "http://xxxx";

          // 使用export将方法暴漏出去
          function getAllData(): any[] {
              console.log("获取数据库的数据111");
              return [
                  {
                      title: '标题1-哈哈',
                      content: '内容1-呵呵'
                  },
                  {
                      title: '标题2-哈哈',
                      content: '内容2-呵呵'
                  }
              ]
          }
          function saveOneData(data: any[]): boolean{
              console.log(data);
              return true;
          }
          // 以对象的形式，导出需要导出的数据
          export { DBUrl, getAllData, saveOneData };
        ```  

      (3) 方式3：通过export关键字和default关键字来进行默认暴漏，每个模块都有一个且只能有一个默认导出。  

        ``` TypeScript
          // export default默认导出：每个模块可以有一个default导出。默认导出使用default关键字标记；
          // 并且一个模块只能够有一个default导出。需要使用一种特殊的导入形式
          function sayHello(): void{
              console.log("Hello Modules！");
          }
          export default sayHello;
        ```  

    - 命名空间：在代码量较大的情况下，为了避免各种变量命名之间的冲突，可将相似功能的函数、类、接口等放置到命名空间内。同Java包，.Net命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴漏需要在外部访问的对象。命名空间内的对象通过export来暴漏数据。  
      (1) 定义命名空间使用namspace关键字，在使用命名空间内的数据时，需要使用`命名空间.数据名`的形式。  

        ``` TypeScript
          // 定义命名空间A
          namespace A{
              // 定义一个接口
              interface Animal{
                  type: string;
                  eat(): void;
              }
              // 定义两个类实现该接口    命名空间中的数据使用export关键自暴漏
              export class Dog implements Animal{
                  type: string;
                  constructor(type: string) {
                      this.type = type;
                  }
                  eat():void {
                      console.log("狗啃骨头！");
                  }
              }
              export class Cat implements Animal{
                  type: string;
                  constructor(type: string) {
                      this.type = type;
                  }
                  eat(): void {
                      console.log("猫吃鱼！");
                  }
              }
          }
          // 定义命名空间B,不同的命名空间内可以使用相同的变量名
          namespace B{
              // 定义一个接口
              interface Animal{
                  type: string;
                  eat(): void;
              }
              // 定义两个类实现该接口
              export class Dog implements Animal{
                  type: string;
                  constructor(type: string) {
                      this.type = type;
                  }
                  eat():void {
                      console.log("狗啃骨头！");
                  }
              }
              export class Cat implements Animal{
                  type: string;
                  constructor(type: string) {
                      this.type = type;
                  }
                  eat(): void {
                      console.log("猫吃鱼！");
                  }
              }
          }
          // 在使用命名空间的时候需要使用命名空间.变量名的形式来使用命名空间中的数据
          let dog = new A.Dog("犬科");
          dog.eat();
          let cat = new B.Cat("猫科");
          cat.eat();
        ```  

      (2) 还可以将命名空间抽离到外面的模块里，使用的时候需要先引入模块。

        ``` TypeScript
          // ./modules/module.ts
          export namespace C{
              export let a: string = "我在命名空间C里！";
          }
          export namespace D{
              export let a: string = "我在命名空间D里！";
          }
          // index.ts
          import { C, D } from "./modules/module";
          console.log(C.a);
          console.log(D.a);
        ```  

    - 命名空间和模块的区别：命名空间：内部模块，主要用于组织代码，避免命名冲突。模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

7. TypeScript中的装饰器
    - 装饰器是一种特殊类型的声明，它能偶被附加到类声明、方法、属性或参数上，可以修改类的行为。通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法，参数的功能。  
    - 常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器。根据装饰器的写法可以分为：普通装饰器(无法传参)，装饰器工厂(可传参)。装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一。  
    - 类装饰器：类装饰器在类声明之前被声明(仅靠着类声明)。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。  
      (1) 普通类装饰器，无法传参  

      ``` TypeScript
        function logClass(params: any){
            console.log(params); // params就指向了当前的类
            // 可以通过prototype属性来扩展类上的属性和方法，prototype是原型链
            params.prototype.apiUrl = "localhost://207107:";
            params.prototype.run = function (): void{
                console.log("我是扩展的run方法");
            }
        }
        // 使用@符号来用装饰器
        @logClass
        class HttpClient{
            constructor(){
            }
            getData() {
            }
        }
        // 实例化HttpClient类
        let http: any = new HttpClient();
        console.log(http.apiUrl);
        http.run();
      ```  

      (2) 装起工厂类装饰器，可以传递参数  

        ``` TypeScript
          function logClass(params: string) {
              return function (target: any): void {
                  console.log(target); // target指向装饰的类
                  console.log(params); // params为当前传递的参数
                  // 通过修饰器工厂传递参数之后就可以通过参数来进行不同的操作
                  target.prototype.apiUrl = params;
              }
          }
          // 在装饰类的时候传递参数
          @logClass("http://localhost:3000/data")
          class HttpClient{
              constructor() {
              }
              getData() {
              }
          }
          let http: any = new HttpClient();
          console.log(http);
          console.log(http.apiUrl);
        ```  

      (3) 通过类装饰器重载类的构造函数和方法；类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数；如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明。  

      ``` TypeScript
        function decoratorClass(target: any) {
            console.log(target);
            // 重载构造函数和方法
            return class extends target{
                type: any = "我是修改后的type";
                getInfo() {
                    console.log(this.type + "-----");
                }
            }
        }

        @decoratorClass
        class Animal{
            type: string | undefined;
            constructor() {
                this.type = "我是构造函数里面的type";
            }
            getInfo(): void {
                console.log(this.type);
            }
        }
        let animal = new Animal();
        animal.getInfo();
      ```

    - 属性装饰器  
      (1) 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。 第二个参数：成员的名字。  
      (2) 实例：

        ``` TypeScript
          // 属性装饰器
          function propertyDecorator(params: any) {
              if (params === "instance") {
                  return function (target: any, attr: string): void{
                      console.log(params); // 传递的参数
                      console.log(target); // 当前是实例成员的属性，所以target指向类的原型对象prototype
                      console.log(attr); // 属性名
                      target[attr] = "修改后的name";
                  }
              } else {
                  return function(target: any, attr: string): void{
                      console.log(params); // 传递的参数
                      console.log(target); // 当前是静态成员的属性，所以target指向类的构造函数
                      console.log(attr); // 属性名
                      target[attr] = "动物";
                  }
              }
          }
          class Person{
              // 使用属性装饰器 修饰实例属性
              @propertyDecorator("instance")
              name: string | undefined;
              // 使用属性装饰器 修饰静态属性
              @propertyDecorator("static")
              static type: "动物";
              constructor() {
              }
              getInfo() {
                  console.log(this.name);
              }
          }
          let p = new Person();
          console.log(p.name);
          console.log(Person.type);
        ```

    - 方法装饰器：
      (1) 方法装饰器会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法的定义。  
      (2) 方法装饰会在运行时传入下列三个参数：第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象；第二个参数：成员的名字；第三个参数：成员的属性描述符，其中value属性指向该方法。由此可以使用第一个参数来扩展类的属性和方法，可以通过第二个参数来修改原方法。  

        ``` TypeScript
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
        ```
