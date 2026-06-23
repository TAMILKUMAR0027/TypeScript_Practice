import readlineSync from 'readline-sync';
export {}

const num = readlineSync.questionInt();
const digits = Math.abs(num).toString();

if (digits.length !== 5) {
    console.log('Not a valid number');
} else {
    console.log(digits.split('').reverse().join(''));
}
