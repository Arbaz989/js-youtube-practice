// function ko hum jitna marzi code aik packagae me rakh dia hai aur usk0 hum jaha chahe
// le ja kar use karssakte hai 


console.log("A");
console.log("R");
console.log("B");
console.log("A");
console.log("Z");

function user(){
 console.log("A");
console.log("R");
console.log("B");
console.log("A");
console.log("Z");                         // this is function sceope 
}
user();      // user is a reference // and () is execution


// function ar(num1+num2 // aka parmeters){
// console.log(num1+num2)
// }
// ar(23 + 34 // aka arguments )
    //  This code not gonna return the value because we never return it in to the result 
// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }
// const result = addTwoNumbers(32+4)
// console.log(result)

//  Heres is two ways to return the value 
function addTwoNumbers(num1,num2){
  // let result = num1+num2
  // return result; // another way to do i t
  return num1 + num2;
}
const result = addTwoNumbers(32,4)
 console.log("RESult:"+result);

function loginUserName(username = "ARvaz"){ // default value de di hum ne  
 //  if(username===undefined){
 // console.log("please enter a username")
 //    return 
  if (!username){     // ! use for false if is false means empty 
    console.log("please enter a username ")
   return 
  }
return ` ${username} user just logged in`
}
// loginUSerName()  //// sirf is se call nhi hoga ku ke hum ne kisi variable ke under return nhi kia
console.log(loginUserName())


//  how to add multiple values by using rest aka spread operator 

function calculateCartPrice(valuee1,valuee2,...nmm1) {
  return nmm1;
}

console.log(calculateCartPrice(23,34,45));

const users = {
  name: "Arbaz",
  age: 56
};

function handleObjects(anyObject) {
  console.log(`Username is ${anyObject.name} and his age is ${anyObject.age}`);
}

// handleObjects(users);

// handleObjects(users);
handleObjects({
  name: "arbva",
  age : 34
})

//  how to give value via  array 


const mynewArray = [23,2323,23]

function arrays(getArray) {
  return getArray[1]
}
// console.log(arrays(mynewArray))
console.log((arrays([23,23,23])));






































