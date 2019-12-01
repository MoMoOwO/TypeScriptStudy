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
    (1)TypeScript中为了是编写的代码更规范，更有利于维护，增加了类型校验(变量声明必须指定类型)，在TypeScript中主要给我们提供了以下的数据类型：布尔类型(boolean)、数字类型(number)、字符串类型(string)、数组类型(array)、元组类型(tuple)、枚举类型(enum)、任意类型(any)、null和undefined、void类型、never类型。增加了类型检验后一般的类型如string、number声明变量后，只能赋值为对应类型的值。  
    (2) 布尔类型boolean  
      语法：`var flag: boolean = false;`  
    (3) 数字类型number  
      语法：`var num: number = 123;`  
    (4) 字符串类型string  
      语法：`var str: string = 'abcd';`  
    (5) 数组类型array  
      TS中一般有三种常用的定义数组的方法：  

      ``` TypeScript
        // 第一种方式，指定单一元素类型的数组
        var arr1: number[] = [1, 2, 3, 4]; // 定义一个数值型数组
        // 第二种方式，指定单一元素类型的数组
        var arr2: Array<number> = [1, 2, 1, 3];
        // 第三种方式，指定元素为任意类型的数组
        let arr3: any[] = [1, true, 'str'];
      ```

    (6) 元组类型(tuple)，属于数组的一种，使用元组类型可以为数组指定位置规定数据类型  
      语法：`let tup: [number, string] = [1, 'abc'];`  
    (7) 枚举类型(enum)  
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

    (8) 任意类型(any)：any类型的变量可以被修改为任意类型  
      语法：`let ss: any = 123;`  
    (9) null和undefined，是其他类型(never)的子类型  
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

    (10) void类型：TypeScript中void表示没有任何类型，一般用于定义方法且方法没有返回值的时候  
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

    (11) never类型 其他类型，(包含null和undefined)的子类型，代表从不会的出现的值，这意味着声明never的变量只能被never类型所赋值  
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
    (1) TS中定义函数的方法，基本与ES5类似，但是需要在声明方法时指定函数的返回值类型  
      函数声明法  

      ``` TypeScript
        function fun(): string {
            console.log("fun()");
            return 'fun()';
        }
        // 调用函数
        console.log(fun());
      ```

      匿名函数法  

      ``` TypeScript
        var fun2 = function(): number{
            console.log('fun2()');
            return 1;
        }
      ```

      ts中定义带有参数的方法，参数列表必须指定参数类型，调用函数的时候也必须类型对应  

      ``` TypeScript
        function getInfo(name: string, age: number): string{
            return `${name} --- ${age}`;
        }
      ```

      定义没有返回值的方法  

      ``` TypeScript
        function bar(): void {
            console.log("bar()没有返回值");
        }
        bar();
      ```  

    (2) 函数的参数列表  
      可选参数，在ES5中实参和形参可以不一样，但是在TS中必须一样，如果不一样就需要配置可选参数，方式为在可选择是否传递的参数名后加一个`?`，而且可选参数必须配置到参数列表的最后面。  

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

      默认参数，在ES5中没法设置默认参数，在ES6和TS中都可以设置默认参数；调用函数时，可以不为默认参数赋值，这时候将会使用默认参数默认的值，而调用函数时赋值了，则会覆盖默认的值  

      ``` TypeScript
        function getInfo3(name: string, age: number = 20):string {
            return `${name} --- ${age}`;
        }
        console.log(getInfo3("李四"));
      ```  

      剩余参数，使用ES6三点运算符来接收不确定个数的形参个数，若参数列表前面有一部分参数，则传参是按顺序为前面的形参赋值，剩余的参数为三点运算符变量赋值。  

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

    (3) 函数的重载，Java中函数的重载，是指两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况；TypeScript中的重载，通过为同一个函数提供多个函数类型定义来实现多种功能的目的；TS为了兼容ES5和ES6，所以TS中函数重载的写法与Java有区别。  

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

    (4) 箭头函数，与ES6的箭头函数相同  

      ``` TypeScript
        // 箭头函数中的this指向上下文
        setTimeout(() => {
            console.log("run");
        }, 1000);
      ```
