import readlineSync from 'readline-sync';
export {}

const prices: number[] = [];

while (true) {
    const value = readlineSync.questionInt();
    if (value === -1) {
        break;
    }
    prices.push(value);
}

const inRange = prices.filter((p) => p >= 5 && p <= 30);
if (inRange.length === 0) {
    console.log('0 0 0');
} else {
    const min = Math.min(...inRange);
    const max = Math.max(...inRange);
    const avg = Math.floor(inRange.reduce((sum, p) => sum + p, 0) / inRange.length);
    console.log(max, min, avg);
}
