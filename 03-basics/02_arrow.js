const user1 = {
    namee : "arbaz",
    price : 3434,
    WecomeMessage : function(){
        console.log(`${this.namee} , Welcome to my website `); // this jo hai current context yani values to identify karta hai aur agar baad mein update
        // hoto update bhi karta hai 
        console.log(this)

    }
}
user1.WecomeMessage();
user1.namee = "sam";
user1.WecomeMessage();

console.log(this); // this is empty because we are in the global scope ; // browser ke andar jo gobal object hai wo window object hai 

// function names() {
//     let username = "Arbaz"
//     //onsole.log(this) // this wil not work 
//     //console.log(this.username) // neither do this 
// }
// names()
//  arrow function




// const names = () =>{
//     let username = 'arvz'
//     console.log(this.username)
// }
// names();


// ecplicit return 

// const addTwo = (num1,num3) => {
//     return num1+num3
// }
// console.log(addTwo(2,3))

//  implicit return 

// const addTwo =(num1,num2)=> num1+num2
// const addTwo =(num1,num2)=> (num1+num2)

const addTwo =(num1,num2)=> ({namee:"ARbaz"})

console.log(addTwo(2,3))


// global scope ke pollution ko hatane ke liye hum iife ka use karte hai 

// Immdiatiely INvoked Funcion Expressions (IFFE)

(function chaiii(){
    // named iife
    console.log(`DB conneteres`);
})();

( (name)=>{
    console.log(`Db connnected two ${name}`);
})('Arbaz');