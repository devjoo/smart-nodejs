var Users = [{name:'소녀시대',age:20},{name:'소냐',age:28}];

var add = function(a , b){
  return a + b;
};

Users.push(add);

console.log(Users[2](10,5));