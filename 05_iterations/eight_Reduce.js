myNums = [1,2,3]
const   initialValue = 0
// const total = myNums.reduce(function(accumulator,currentvalue){
//     console.log(`accumalator - ${accumulator} , currentvalue - ${currentvalue} `);      // accumulator or previousvalue
//     return accumulator+currentvalue
// },initialValue)

const total = myNums.reduce((accumulator,currentvalue)=> (accumulator + currentvalue),initialValue)

// console.log(total);

const cart = [
    {
        itemName:"py",
        price:1200
    },
    {
        itemName:"js",
        price:100
    },
    {
        itemName:"C++",
        price:300
    },
]

const totalPay = cart.reduce( (accumulator,item)=>( accumulator + item.price ),0)   // item  denote object, inside array
console.log(totalPay);