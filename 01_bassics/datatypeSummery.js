// premitive

// - String ,Number, Boolean, null, Undefined, bigint, Symbol 

let str1 = "pranta"
let number = 100;
let isLogin = true;
let temp = null;
let score;
let bigNumber = 4567898653975774n

console.log(typeof str1)
console.log(typeof number)
console.log(typeof isLogin)
console.log(typeof temp)
console.log(typeof score)
console.log(typeof bigNumber)

let id = Symbol("123")
let newId = Symbol("123")
// console.log(id === newId)

console.log(typeof id)

// nonpremitive

// array , function ,objects

const heros = ["shaktiman","naagraj","doga"]

const hello = function(){
    console.log("hello world")
}

const obj = {
    name: "pranta",
    age: 20
}
console.log(typeof heros)
console.log(typeof hello)
console.log(typeof obj)