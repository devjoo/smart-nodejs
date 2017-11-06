var util = require('util');
var EventEmitter = require('events').EventEmitter;

// calc는 계산기 객체로 function키워드를 사용하여 prototype 객체로 만든다.
var calc = function(){
    var self = this;

    this.on('stop',function(){
        console.log('calc에 stop event 전달 됨');
    });
};

// calc 객체가 이벤트를 처리할수 있도록 util모듈에 있는 inherit()메소드를 사용하여 EventEmitter를 상속 받는다.
util.inherits(calc,EventEmitter);

// calc객체 안에 있는 prototype객체의 속성으로 add함수를 추가하면 >> new 연산자를 이용해 calc객체의 인스턴스 객체를 만들었을때 add()함수를 사용할 수 있다
calc.prototype.add = function(a,b){
    return a + b;
};

module.exports = calc;
module.exports.title = 'calculator';