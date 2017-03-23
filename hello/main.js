//首先引入hello模块
var hello = require('./hello');
var s = 'lifeng';
hello.greet(s);
hello.getPostInfo(s);
//全局变量
console.log(global.console);
// console.log(process);
//判断当前js代码的运行环境,在浏览器端的全局变量是window,在代码中判断window的类型如果是没有定义的那么js代码就不是在浏览器环境下运行的
if(typeof(window) == 'undefined'){
    console.log('node env');
}else{
    console.log('browser');
}

