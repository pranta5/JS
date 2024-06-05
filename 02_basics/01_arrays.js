let arr = [1,3,4,5]
const myArr = new Array(1,2,3,"pranta","das",8)

// console.log(typeof arr)

// Array methods

myArr.push(5)
myArr.pop()

myArr.unshift(9)
myArr.shift()


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)



        // slice,splice
 console.log("original",myArr)

const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("A",myArr)

const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("B",myArr)  //splice remove the splice section from the original array
