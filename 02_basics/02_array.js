const marvel_hero = ["thor","ironman","spiderman"]
const dc_hero = ["superman","flash","batman"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero)

// const all_hero = marvel_hero.concat(dc_hero)
// console.log(all_hero)

const all_hero_spread = [...marvel_hero,...dc_hero]     //"spread" can join multiple array
console.log(all_hero_spread)


const re_array = [1,2,3,[4,5],6,7,[8,9,[10,11]],12]

const flat_array = re_array.flat(Infinity)
console.log(flat_array)


console.log(Array.isArray("pranta"))
console.log(Array.from("pranta"))
console.log(Array.from({name : "pranta"}))  //retun empty array 


let score1= 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))