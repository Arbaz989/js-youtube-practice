
// *************NUMBERS**************************

const score = 34
console.log(score)
const newScore = new Number(34)
console.log(newScore)

// 
console.log(score.toString())
console.log(newScore.toFixed(2))

const game = 232.323232
console.log(game.toPrecision(4))
console.log(game.toExponential(3))

const newGame = 100000
console.log(newGame.toLocaleString('en-IN'))
// ******************MATHS**************************

//console.log(Math) //Math is an object 

//console.log(Math.abs(-4))  // turn the value from  negativ to positive
// console.log(Math.round(3.4))
// console.log(Math.ceil(3.6))
// console.log(Math.floor(3.4))
// console.log(Math.min(3,4,4,4,4))
// console.log(Math.max(4,4343,43434,34))


console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
 
console.log(Math.floor(Math.random() * (max-min+1)+min))


