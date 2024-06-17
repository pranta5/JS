const mynum= [1,2,3,4,5,6,7,8,9]

// const newnum = mynum.filter((item)=>item>4)

// const newnum = mynum.filter( (item)=>{
//     return item>4                                   // within scope need return
// })


let newnum=[]

mynum.forEach((item)=>{
    if (item>4) {
        newnum.push(item)
    }
})

// console.log(newnum)

const my_book=[
    {
        title:'Book1',genre:"history",publish:1998
    },
    {
        title:'Book2',genre:"Drama",publish:2000
    },
    {
        title:'Book3',genre:"GHost",publish:1996
    }
]

// const user_bk = my_book.filter( (bk)=> bk.genre==="history")
const user_bk = my_book.filter( (bk)=>{
    return bk.publish>=1998 && bk.genre ==="history"
})
console.log(user_bk);