let myHeros = ['thor','spiderman']

let heroPower = {
    thor :"hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
// heroPower.getSpiderPower()

Object.prototype.pranta = function(){
    console.log('pranta is present in all objects');
}

Array.prototype.heyPranta = function(){
    console.log(`pranta is waiting`);
}

// heroPower.pranta()

// myHeros.pranta()

// myHeros.heyPranta()
// heroPower.heyPranta()       // does not have access

const user = {
    name:'pranta'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : 'js',
    fulltime :true,
    __proto__ :Teacher
}

Teacher.__proto__=user
// console.log(Teacher.name);

// console.log(TeachingSupport.makeVideo);

// modern syntax

Object.setPrototypeOf(TeachingSupport,user)
// console.log(TeachingSupport.name);

let anotherUsername = 'pranta     '

String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`);
}
anotherUsername.trueLength()

'das   '.trueLength()