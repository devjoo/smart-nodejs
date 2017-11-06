var Users = [{name:'소녀시대',age:20},{name:'소냐',age:28},{name:'말든',age:36}];

for (var i = 0;i < Users.length; i++){
  console.log (i + '번째 ' + Users[i].name + Users[i].age);
}

// forEach 구분 사용하기
Users.forEach(function (Users,index) {
  console.log (index + '번째 ' + Users.name + Users.age);
});