// Dates

let myDate  = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());


console.log(typeof(myDate));

let myCreatedDate = new Date(2024,0,24)

// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getTime())

let timestamp = Date.now()

// console.log(timestamp)
// console.log(Math.floor(timestamp/1000))


let newDate = new Date()

// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)
// console.log(newDate.getFullYear())

res = newDate.toLocaleString('default',{
    weekday:"long",
    year:"numeric"
})
console.log(res)
