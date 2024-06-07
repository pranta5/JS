
// var c=600        //global scope
let b= 500

if (true) {
    const a=30
    let b=40        //local scope
    // var c=50         // var can access from scope
    // console.log("inner" , b);
}

// console.log(c)                      //{}- when it come with function,loop... its called scope
// console.log(b)


function one(){
    let name="pranta"
    function two(){
        let web="website"
        console.log(name)
    }
    // console.log(web);
    two()
}
// one()

if(true){
    const username = "pranta"
    if(username==="pranta"){
        const website = " youtube"
        // console.log(username + website)
    } 
    // console.log(website);
}
// console.log(username);

console.log(addone(5))

function addone (num){
    return num+1
}


addtwo(5)                           //Cannot access 'addtwo' before initialization
const addtwo = function (num){
    return num+2
}

