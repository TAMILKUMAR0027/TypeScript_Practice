const secret=Symbol("secret")
const user={
    name :"alice",
    [secret]:"top secret"
}
console.log(user[secret])
const symbols=Object.getOwnPropertySymbols(user)
console.log(symbols)
