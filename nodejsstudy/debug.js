/**
 *@author happykala
 *@time 2017/3/2
 *@abstract 使用控制台调试nodejs的示例代码
 */
var a = 1;
var b = 'world';
debugger;
var c = function(x){
    console.log('hello' + x + a);
}
debugger;
c(b);

