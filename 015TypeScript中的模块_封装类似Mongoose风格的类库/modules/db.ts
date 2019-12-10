// 定义接口
interface DBI<T>{
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

// 使用export关键字将MySql、MSSql数据库操作函数暴漏出去
// 定义一个操作MySql数据库的类   注意要实现泛型接口，这个类也应该是一个泛型类
export class MySql<T> implements DBI<T>{
    constructor() {
        console.log("数据库建立链接...");
    }
    add(info: T): boolean {
        console.log("MySql", info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number) {
        let list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MySql"
            }
        ];
        return list;
    }
}

// MSSqlServer
export class MSSqlDB<T> implements DBI<T> {
    add(info: T): boolean {
        console.log("MSSql", info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let list = [
            {
                title: "xxx" + id,
                dsc: "模拟数据--MSSql"
            }
        ];
        return list;
    }
}