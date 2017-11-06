var url = require('url');

// 주소 문자열을 URL객체로 만들기
var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=steve+jo&qdt=0&ie=utf8&query=steve+jobs');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열  : '+ curStr);
console.log(curURL);

// 요청 파라미터 분리하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s',querystring.stringify(param));