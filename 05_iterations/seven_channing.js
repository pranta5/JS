const my_number = [1,2,3,4,5,6,7]

// const user_number = my_number.map( (num)=> num+10)

let user_number =[]
my_number.forEach((num)=>{
    user_number.push(num+10)
})

// console.log(user_number)

const new_num = my_number.map( (num)=>num*10).map( (num)=>num+1).filter((num)=> num>=40)
console.log(new_num);