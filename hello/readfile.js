'use strict'
var fs = require('fs');

fs.readFile('test.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.readFile('barman.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
        //将buffer格式直接转换成字符串格式
        var text = data.toString('utf-8');
        // console.log(text);
        //字符串转换为buffer格式
        var buf = new Buffer(text,'utf-8');
        console.log(buf);
    }
});

//同步读取文件
var datasync = fs.readFileSync('test.txt','utf-8');
console.log(datasync);
//同步读取文件的时候需要将错误catch住
try{
    datasync = fs.readFileSync('test.txt','utf-8');
}catch(err){
    console.log(err);
}
//文件写入
var data = "hello world node js!";
fs.writeFile('lifeng.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('写入成功');
    }
});

//读取文件的信息（大小、创建时间）
fs.stat('lifeng.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log("is files " + stat.isFile());
        //是否是文件夹
        console.log("is directoty " + stat.isDirectory());
        //如果是文件的情况下输出文件的信息
        if(stat.isFile()){
            //文件大小
            console.log(stat.size);
            //文件的创建时间
            console.log(stat.birthtime);
        }
    }
});