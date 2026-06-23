import readlineSync from "readline-sync";

const name = readlineSync.question("Enter your name: ");
const age = readlineSync.questionInt("Enter your age: ");

console.log("Name:", name);
console.log("Age:", age);