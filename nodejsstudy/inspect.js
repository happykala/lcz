/**
 *@author happykala
 *@time 2017/3/15
 *@abstract
 @param .
 */
var util = require('util');

function Person(){
    this.name = 'lifeng';

    this.toString = function(){
        return this.name;
    };
}

var _objPerson = new Person();
console.log(util.inspect(_objPerson));
console.log(util.inspect(_objPerson,{showHidden:true,depth:null,color:true}));
//检测是否为数组
console.log(util.isArray(_objPerson))