import readlineSync from 'readline-sync'
let num=readlineSync.questionInt()
let power=readlineSync.questionInt()
let value=1
for(let i=1;i<=power;i++){
    value*=num
}
console.log(value)