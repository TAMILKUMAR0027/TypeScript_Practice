import readlineSync from 'readline-sync';
export {}

const n = readlineSync.questionInt();

if (n <= 1) {
    console.log('No');
} else {
    let isPrime = true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? 'Yes' : 'No');
}
