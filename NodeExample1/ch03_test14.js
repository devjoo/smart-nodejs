var Users = [{name:'소녀시대',age:20},{name:'소냐',age:28},{name:'말든',age:36}];

console.dir(Users);
console.log(Users.length);

var Users2 = Users.slice(1,3);
console.dir(Users2);

// splice 복사
var User3 = Users2.slice(1);
console.log(User3);