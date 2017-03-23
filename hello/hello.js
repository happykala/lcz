var s = 'hello';
//定义函数用于输出
function greet(name){
    console.log(s+',' + name + '!');
}

function getPostInfo(__strInfo){
    console.log(__strInfo);
}
//将函数作为模块的输出以便外界能够使用
// exports.greet = greet;
// exports.getPostInfo = getPostInfo;
module.exports = {
    greet:greet,
    getPostInfo:getPostInfo
}
//或者是使用下面的形式处理
// exports.greet = greet;
// exports.getPostInfo = getPostInfo;
//在默认的情况下node会将需要加载的js文件放入到包装函数load中执行。在执行这个函数之前node准备好了module变量
/**
 * var module = {
 *  id:hello,
 *  exports:{}
 * }
 */
//load函数最终返回的是module.exports,在默认情况下node准备的exports和module.exports是同一个变量切初始化为空