var calc = require('./calc');

console.log('모듈로 분리한후 - calc.add 함수 호출 결과 :  %d', calc.add(10,32));

var calc2 = require('./calc2');

console.log('모듈로 분리한후 - calc2.add 함수 호출 결과 :  %d', calc2.add(10,18));