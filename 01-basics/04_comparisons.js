// console.log(2<2)
// console.log(2>2)
// console.log(2>=2)
// console.log(2==2)
// console.log(2!=2)

// console.log("2"==2)
// console.log("3">4)

console.log(null>0);
console.log(null>=0);
console.log(null==0);
// THe reason that second one work because an equality check == and comaparison check >= > works differently.
// comparison converte null into a number ,treating it as 0.
// that's why 0null >=1 and 1 null>0 is false 

console.log(undefined==0);
console.log(undefined>0)
console.log(undefined < 0)

console.log("2"===2)