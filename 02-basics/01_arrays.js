const num = [2,5,5,5,5,567,6] // Square brakets and Elements
const hero = ["Ayanokoji","Aizen"]

console.log(num[4])
console.log(hero)
// some methods in Array
hero.push("Arbaz") // add the value at the end of the array 
hero.pop() // deletes the value at the end the of  the array
hero.unshift(4) // add the value at the start of the array
hero.shift() // deletes the value at the start of the array 

console.log(hero.indexOf("Aizen"))
console.log(hero.includes(2))

const newarr = hero.join() // change the array into the string 
console.log(newarr)
console.log(hero)

const A = [0,3,2,3]
console.log(A.slice(1,3)) // do not manipulate the origional array 
const B = [3,5,7,7]
console.log(B.splice(1,3)) // delete origional array in the 
console.log(A)
console.log(B)

