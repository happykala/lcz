/**
 *@author happykala
 *@time 2017/3/15
 *@abstract
 @param .
 */
var events = require('events');
var emitter = new events.EventEmitter();
//注册两个监听事件
emitter.once('someevent',function(args1,args2){
   console.log('listener1',args1,args2);
});
var listener2 = function listener2(args1,args2){
    console.log('listener2',args1,args2);
};
emitter.on('someevent',listener2);
//触发监听程序
emitter.emit('someevent','lifeng',1991);
emitter.emit('someevent','lifeng',1991);

emitter.removeListener('someevent',listener2);

emitter.emit('someevent','lifeng',1991);


