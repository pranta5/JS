function SetUserName(username){
    this.username = username
    console.log('called');
}

function createUser (username,email,password){
    SetUserName.call(this,username)
    this.email = email
    this.password = password
}

const pranta = new createUser('pranta','p@gmail.com',1234)
console.log(pranta);

// call pass the current executation context to another function