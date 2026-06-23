import readlineSync from 'readline-sync';
export {}

const num = Math.abs(readlineSync.questionInt());
let evenSum = 0;
let oddSum = 0;

for (const digitChar of num.toString()) {
    const digit = Number(digitChar);
    if (digit % 2 === 0) {
        evenSum += digit;
    } else {
        oddSum += digit;
    }
}

console.log(evenSum, oddSum);
