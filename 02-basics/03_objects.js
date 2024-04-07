// singleton
// literals

// declaring a symbol is a different game 
const mysym = Symbol("key1")

const user1 = {
    name: "Arbaz",
    "full name": "Arbaz Awan",
    age: 21,
    email: "dfdj@gmail.com",
   [mysym] : "mykey1",
    isUserLogged: false,
}
// console.log(user1.age) // bad practice 
// console.log(user1)
// console.log(user1["age"])
// console.log(user1[mysym])
// console.log(typeof[mysym])

// user1.email = "Arbaz@gmail.com"
// Object.freeze(user1) // no furthur changes can be applied to the value if freeze is applied 
// user1.email = "adffdsfasd"
// console.log(user1)

user1.greeting = function () {
    console.log(`hello my name is ${this.name}`) // this keyword is used for 
}
console.log(user1.greeting())

//  ziadatar value hum . se  access karte hai lekin aese cases hote hai jisme hum [] se kartea hai  
