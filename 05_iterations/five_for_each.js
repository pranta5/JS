const coding =['a',"b","c","d"]

coding.forEach((item)=> {
    // console.log(item);
});

function print(val){
    // console.log(val)
}
coding.forEach(print)


coding.forEach( ( item, index, arr ) => { 
    // console.log(item,index,arr)
})

const mycode = [
    {
        name:"pranta",
        age:25
    },
    {
        name:"apurba",
        age:24
    }
]

mycode.forEach((item)=>{
    console.log(item.name);
})

console.log(mycode[0]);