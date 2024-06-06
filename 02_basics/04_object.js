// const tinderUser = new Object()     //singleton object

const tinderUser ={}            //nonsingleton object

tinderUser.name="pranta"
tinderUser.age=25

// console.log(tinderUser)

const regUser = {
    email:"abc@gmail.com",
    name:{
        fullname:{
            firstname:"pranta",
            lastname:"das"
        }
    }
}

// console.log(regUser.name.fullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)   // {}-target ,source..
const obj3 = {...obj1,...obj2}      // spread

// console.log(obj3)

const user = [
    {
        id:123,
        gmail:"p@gmail.com"
    },
    {
        id:223,
        gmail:"d@gmail.com"
    }
]
// console.log(user[0].gmail)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))

