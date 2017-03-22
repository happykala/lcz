/**
 *@author happykala
 *@time 2017/3/21
 *@abstract
 @param .
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node Js</h1>');
    res.end('<p>Hello World<p>');
}).listen(3000);
console.log('HttpServer is listening in port 3000');
