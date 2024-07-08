// class user {
//     constructor(username,password){
//         this.username = username
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const pranta = new user('pranta',123)
// console.log(pranta.encryptPassword());
// console.log(pranta.changeUsername());

// without class

function user(username,password){
    this.username = username
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.password}qwe`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const das = new user('das',456)
console.log(das.encryptPassword());
console.log(das.changeUsername());
