// Array

let num = [1,2,3,4]
for (const val of num) {
    // console.log(`value is ${val}`)    // array (for of) - return - array value
}


let greeting = "hello world!"
for (const greet of greeting){
    if(greet===' '){
        continue        // to skip space
    }
    // console.log(`each char is - ${greet}`)
}


//  Maps

const map1 = new Map()
map1.set("IN","India")
map1.set("USA","United State Of America")
map1.set("FR","France")
map1.set("IN","India")


// console.log(map1)

for (const [key,value] of map1) {
    // console.log(key,"=",value);
}



const myobj = {
    js:'javascript',
    py:'python',
    cpp:'c++'
}

for (const [key,value] of myobj) {
    console.log(key,"=",value);     // myobj is not iterable
}