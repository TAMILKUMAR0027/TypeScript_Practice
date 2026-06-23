import readlineSync from 'readline-sync';
export{}
let n=readlineSync.questionInt();
for(let i=1;i<=10;i++){
    console.log(n)
    n+=10
}