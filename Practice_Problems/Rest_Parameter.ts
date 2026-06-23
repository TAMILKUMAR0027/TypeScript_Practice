function sum1(a:number,...b:number[]):number{
    let result=a
    for(var i=0;i<b.length;i++){
        result+=b[i]
    }
    return result;
}
let r1=sum1(3,5)
let r2=sum1(2,3,4,5,6);
console.log(r1,r2)
