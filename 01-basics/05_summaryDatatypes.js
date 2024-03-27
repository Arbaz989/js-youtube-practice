// values Primitive datatype
//boolean,string,number,null,undefined,Bigint,symbol

let isUserLogged = false
const score = 100
const numberScore = 100.3
const outsideTemp = null
let userMessage = "Welcome "
let userName;
const id = Symbol('123') 
const anotherId = Symbol('2323')
console.log(typeof id)
console.log(id==anotherId)
const bigNumer = 2323232323232323n
console.log(typeof (bigNumer))


// 💾 Primitive Data Types Primitive data types are stored directly in memory, meaning they hold their own value.
//  Examples of primitive data types include numbers, strings, booleans, and null.


// 🔗 Non-Primitive Data Types Non-primitive data types, also known as reference types, store a reference to the value rather than the value itself.
//  This means that changes made to a non-primitive data type will affect all references to that value. 
// Examples of non-primitive data types include objects, arrays, and functions. 

// 📚 Memory Allocation Primitive data types are stored in the stack memory, which is faster and more efficient than the heap memory.
//  Non-primitive data types are stored in the heap memory, which is slower but can store larger amounts of dat



// Reference Non Primitive
// Arrays,Objects and functions ///They are called functions and function specifically called object function 

const heroes= ["Rea",343,"e343",true]
let userInfo ={
    name1 :"Arbaz",
    age:20,
}

function myFunction() {
    console.log("Hello world");
}
return myFunction()