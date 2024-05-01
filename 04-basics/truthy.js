const userEmail = "Arba"
if(userEmail){
    console.log("got the userEmail")
}




//  false , "", 0,-0, bigint 0n,null, undefined, Nan falsy values

// truthy value 
// [],'false'," ","0",{},function(){}

// to check empty array

const user1= []
if(user1.length===0){
    console.log("array is empty ")
}
//  to check if the object is empty  or not 

const object1 = {}

if(Object.keys(object1).length === 0){ // it will return in the  form of an array so we can use .length property as we did earliler
console.log("Object is empty")
}

// NUllish colesscing operatpor (??): null, undefined 

let val1;

val1 = null??23 // database se value kabhi kabhi khali ya undefinded aati hai isi liye ye lagate hau 

console.log(val1)



//Terniary operator 
// condition ? true : false

const lattePrice = 100
lattePrice <= 80 ?console.log("less than 80"): console.log("greater than 80");



