var Users = [{name:'소녀시대',age:20},{name:'소냐',age:28},{name:'말든',age:36}];

console.dir(Users);
console.log(Users.length);

// delete키워드로 배열 요소 삭제
delete Users[1];
console.dir(Users);
console.log(Users.length);

Users.splice(0,3,{name:'슬라이두',age:10});
console.log(Users);
console.log(Users.length);