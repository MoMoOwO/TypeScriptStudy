// 使用TypeScript 的interface接口实现Ajax请求

/* $.ajax({
    type: "GET",
    url: "test.json",
    data: { username: $("#username").val(), content: $("#content").val() },
    dataType: "json"
}) */
// 配置Ajax参数规范的接口
interface Config{
    type: string,
    url: string,
    data?: string,
    dataType: string
}
// 创建ajax请求
function ajax(config: Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Success!");
            if (config.dataType === "json") {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText);
            }
        }
    }
}
// 使用ajax请求
ajax({
    type: "get",
    url: "http://a.itying.com/api/productlist",
    data: "张三--111",
    dataType: "json"
});