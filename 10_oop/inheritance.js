class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        return `username is ${this.username}`
    }
}

class Teacher extends User {
    constructor(username,password){
        super(username)
        this.password = password
    }

    addCourse (){
        console.log(`course added by ${this.username}`);
    }
}

const pranta = new Teacher('pranta',123)
pranta.addCourse()

const das = new User('das')

console.log(das.logMe());

console.log(pranta instanceof User);