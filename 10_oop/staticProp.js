class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){
        console.log(`123`);
    }
}
const pranta = new User('pranta')
// pranta.createId()

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const das = new teacher('das','das@gmail.com')
das.logMe()
// das.createId() // canot access