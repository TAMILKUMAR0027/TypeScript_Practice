import readlineSync from 'readline-sync';
export {}

const start = readlineSync.questionInt();
const end = readlineSync.questionInt();
const output: string[] = [];

for (let i = start; i <= end; i++) {
    if (i % 10 === 0) {
        output.push('dong');
    } else if (i % 5 === 0) {
        output.push('ding');
    } else {
        output.push(i.toString());
    }
}

console.log(output.join(' '));
