function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 로 걸어갑니다.');
};

var Person1 = new Person('소녀시대',30);
var Person2 = new Person('소냐',34);

console.log(Person1.name + '이름과 나이' + Person1.age + '객체의 walk(25)를 호출합니다.');
Person1.walk(25);