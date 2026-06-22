let f2:Array<string>=["Banana","Papaya","Apple","Orange"]
for (let index = 0; index < f2.length; index++) {
    console.log(f2[index]);
}
console.log(f2.pop());
f2.push("Mango");
console.log(f2);
f2=f2.concat(["Fig","Grapes"]);
console.log(f2);
console.log(f2.indexOf("Fig"));
console.log(f2.sort())
