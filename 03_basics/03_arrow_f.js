const user = {
    username :"pranta",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="das"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "pranta"
//     console.log(this.username)
// }
// one()

// const chai = function (){
//     let username = "pranta"
//     console.log(this.username)
// }
// chai()

// const chai = ()=>{
//     let username = "pranta"
//     console.log(this.username)
// }
// chai()

// const addtwo = (num1,num2)=>{
//     return num1+num2
// } 
// console.log(addtwo(2,3));

// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(2,3));

// const new_user = () => ({user:"pranta"})        // for object return - (Object )
// console.log(new_user());
