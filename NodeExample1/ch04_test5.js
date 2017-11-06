var fs = require('fs');

// 파일에서 데이터를 읽어 들입니다.
fs.open('./output.txt', 'r', function (err, fd) {
    if (err) throw err;

    var buf = new Buffer(16); // 데이터 크지 지정
    fs.read(fd, buf, 0, buf.length, null, function (err, byteRead, buffer) {
        if (err) throw err;

        var inStr = buffer.toString('utf8', 0, byteRead);

        console.log('파일에서 읽은 데이터 : %s', inStr);
        console.log(err, byteRead, buffer);

        fs.close(fd, function () {
            console.log('output.txt 파일 열고 길이 만큼 읽기 완료.');
        });
    });
});