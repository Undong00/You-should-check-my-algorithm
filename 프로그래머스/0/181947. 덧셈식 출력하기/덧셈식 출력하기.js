const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    rl.close(); // 입력 한 줄 받고 종료
}).on('close', function () {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
});
