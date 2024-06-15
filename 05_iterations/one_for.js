// for

// for (let i=0;i<10;i++){
//     const element = i
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element)
// }

for (let i = 1; i < 5 ; i++) {
    // console.log(`outer loop : ${i}`);
    for (let j = 1; j < 5; j++) {
        // console.log(`inner loop : ${j} and outer loop : ${i}`);
        // console.log(` ${i} * ${j} = ${i*j}`);
    }
}

let myarr = ["a",'b','c']
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}

// for (let index = 0; index <10; index++) {
//     if (index == 5) {
//         console.log(`5 detected`);
//         break        // exit from loop
//     }
//     console.log(`value of i is ${index}`);    
// }


for (let index = 0; index <10; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue            // skip  one condition
    }
    console.log(`value of i is ${index}`);    
}