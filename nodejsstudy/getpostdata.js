var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name:'lifeng',
	email:'1030775250@qq.com',
	address:'wuhan hongshan'
});

var options = {
	host:'www.baidu.com',
	path:'/application/node/post.php',
	method:'POST',
	header:{
		'Conten-Type':'application/x-www-form-urlencoded',
		'Content-Length':'contents.length'
	}
}

var req= http.request(options,function(res){
	res.setEncoding('utf8');
	res.on(data,function(data){
		console.log(data);
	});
});

req.write(contents);
req.end();