// object

const myobj = {
    js:'javascript',
    py:'python',
    cpp:'c++'
}
for(const key in myobj){
    // console.log(`${key} for ${myobj[key]}`);
}

// array 

const programming = ['js','py','cpp']       // array (for in) - return index

for(const key in programming){
    // console.log(`${programming[key]}`); 
}

const map1 = new Map()
map1.set("IN","India")
map1.set("USA","United State Of America")
map1.set("FR","France")
map1.set("IN","India")

for (const key in map1) {      // iteration is not possible
    console.log(key);       // nothing return
}