const marvel_heroe = ["Arbaz","Thor","spiderman"]
const dc_heroes = ["batman","superman","flash"]

//marvel_heroe.push(dc_heroes) // not a good practice 
// console.log(marvel_heroe)

// const newHeroes = marvel_heroe.concat(dc_heroes)
// console.log(newHeroes)

// spread operator
const new_heroes =[...marvel_heroe, ...dc_heroes]
console.log(new_heroes)

const another_array = [1,2,3,4,4,[2,3,4,],[3,5],3,4,4,4]
const real_another_array = another_array.flat(Infinity) // kitni depth tak apne solve karna hai 
console.log(real_another_array) // separates the array


console.log(Array.isArray("Arbaz"))
console.log(Array.from("Arbaz"))
console.log(Array.from({name: "ARaz"})) // ye excute nhi hoga is ki value pair define karni pare gi 
console.log(Array.from(Object.entries({name: "ARaz"})));


let score1 = 122
let score2 = 354
let score3 =3444
console.log(Array.of(score1,score2,score3))