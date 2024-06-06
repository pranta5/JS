// singleton
//  Object.create()

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name :"pranta",
    "full name" :"pranta das",
    [mySym]:"value1", //symbol value
    age : 25,
    location : "kolkata",
    isLogedin : false,
    lastLoginDays : ["monday","saturday"]

}

// console.log(jsUser.age)
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser['age']=26

// Object.freeze(jsUser)

jsUser.isLogedin=true
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user ")
}
jsUser.greetingtwo = function(){
    console.log(`hello js user - ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
console.log(jsUser)