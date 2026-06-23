const num = 1634;
const digits = num.toString().split('').map(Number);
const power = digits.length;
let sum = 0;
for (const d of digits) {
    sum += d ** power;
}
console.log(sum === num);
