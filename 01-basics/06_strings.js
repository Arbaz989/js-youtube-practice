const user = "Arbaz"
const count = 23

// console.log(user+count);   do not use this instead 

console.log(`My name is ${user} and my repo is ${count} `);
// we'll use backtis it comes with string interpretion its a placeholder we can inject any variable directly in there '

const user2 = new String('Arrbaz');
// console.log(user2[4]);
// console.log(user2.__proto__)

console.log(user2.indexOf('Arbaz'))
console.log(user.length);
console.log(user2.toUpperCase())
console.log(user.trim());
console.log(user2.charAt(2));
console.log(user2.indexOf('a'))
const gameName = user2
console.log(gameName.substring(0,4))
const newGame = user2
// diffrence between substring and slice is that it allows you to give the value in negative 
console.log(newGame.slice(-5,4))

const newString = "    Arbaz   "
console.log(newString);
console.log(newString.trim());
const url = "https//:Arbaz.com/Arba%20khan"
console.log(url.replace('%20','-'));
console.log(url.includes('Arbaz'));

const neww = "Arbaz-khan-awan"
console.log(neww.split('-'))
// it will change into an array and splits it 





const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"