let score = "33abc"

// console.log(typeof(score))

let value = Number(score)

// console.log(typeof value)
// console.log(value)

// "33" =>33
// "33abc"=> NaN
// true=>1 false => 0


let isLogin =1
let current=Boolean(isLogin)

//console.log(current)

// 1=> true 0=>false

// ""=>false
// "pranta" => true


let number = 33

let conNumber=String(number)
//console.log(typeof conNumber)

/********** operation *********/

// console.log(1+2);
// console.log("1"+2);
// console.log(1+"2");
// console.log(1+2+"2");
// console.log("1"+2+2);
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
