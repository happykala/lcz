/**
 *@author happykala
 *@time 2017/3/15
 *@abstract
 @param .
 */
var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;

    this.SayHello = function(){
        console.log('Hello' + this.name);
    }
}

Base.prototype.ShowName = function(){
    console.log(this.name);
};

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);

var _objBase = new Base();
_objBase.ShowName;
_objBase.SayHello;
console.log(_objBase);

var _objSub = new Sub();
_objSub.ShowName;
_objSub.SayHello;
console.log(_objSub);
