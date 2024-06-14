// const userEmail = 'a@a.com'
// const userEmail = ''
const userEmail = []

// if (userEmail) {
//     console.log("got email");
// }else {
//     console.log("don't have email");
// }
// falsy value 
// false , 0 , -0 , bigint 0n , "" , null , undefined , NaN

// truthy value 

// "0" ,'false' , " " ,[] , {}, function(){}


// if (userEmail.length===0) {
//     console.log("array is empty");
// }

// const myobj = {}

// if (Object.keys(myobj).length===0){
//     console.log("object is empty");
//     console.log(Object.keys(myobj));    //return array
// }


// Nullish coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 10
val = null ?? undefined ?? 20


// console.log(val);

// turniry operation

// condition ? true : false

const ice = 100

ice < 80 ? console.log("less the 80"):console.log("greater then 80");;
