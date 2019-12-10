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

export function saveData(data: any[]): boolean{
    console.log(data);
    return true;
}