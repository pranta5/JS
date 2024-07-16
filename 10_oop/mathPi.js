const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);

console.log(Math.PI)
Math.PI=5
console.log(Math.PI)

const details = {
    name:'pranta',
    id: 5,
    address:function(){
        console.log('address');
    }
}

console.log(Object.getOwnPropertyDescriptor(details,'name'));

Object.defineProperty(details,'name',{
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(details,'name'));

for (const [key,value] of Object.entries(details)) {  //iterate object
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
    }
    
}
