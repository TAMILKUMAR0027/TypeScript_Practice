function add1(x:number,y:number,z?:number):number{
    if(z==undefined){
        return x+y
    }else{
        return x=y+z
    }
}
console.log(add1(1,2))
console.log(add1(1,2,4))