import readlineSync from 'readline-sync';
export{}
let n=readlineSync.questionInt();
let total=0
for (let i=n;i>0;i--){
    console.log(i)
    total+=i
}
console.log(total)