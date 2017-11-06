console.log('argv속성의 파라미터 수 : ' + process.argv.length);
console.log(process.argv);

if (process.argv.length > 2){
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item,index){
    console.log(index + ':' , item);
});

// forEach메소드는 배열안에 들어있는 각 아이템 값과 인덱스를 함께 전달.
// 배열 객체 들어 있는 값들을 하나씩 확인하기에 좋다.