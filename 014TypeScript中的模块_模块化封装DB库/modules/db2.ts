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