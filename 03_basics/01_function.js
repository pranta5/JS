function add_two_number(num1,num2){
    return num1+num2
}
result = add_two_number(2,3)
// console.log(result)

function loginUserMessage(username="user"){
    if (username==="") {
        return "enter user name"
    }
    return ` hi ${username}`
}
// console.log(loginUserMessage())

function cartPrice(...num1){            // rest operator
    return  num1
}

// console.log(cartPrice(100,200,300,300))  //array

user={
    name:"pranta",
    age : 26
}

function handelObject(anyObject){
    console.log(`username is ${anyObject.name} and age - ${anyObject.age}`)
}

// handelObject(user)
// handelObject({
//     name:"das",
//     age:25
// })

const myArray = [100,200,300]

function get_second_array (get_array){
    return get_array[1]
}
// console.log(get_second_array(myArray))
console.log(get_second_array([500,700,900]))

