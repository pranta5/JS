const user = {
    username:"pranta",
    loginCount :8,
    signedIn : true,
    getUserDetails : function(){
        // console.log('got user details');
        // console.log(`userName : ${this.username}`);
        console.log(this);
    }

}
// console.log(user.getUserDetails());
// console.log(this);

function User(username,islogedin){
    this.username = username,
    this.islogedin = islogedin
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    // return this
}
const userOne = new User('pranta',true)
const userTwo = new User('das',false)

console.log(userOne.greeting());
console.log(userOne.constructor);

// console.log(userTwo);