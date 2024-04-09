
// const obj1 = new Object() // singleton
// console.log(obj1)

const user = {}

user.name = "Arbaz"
user.id = 3443
user.email ="arbaz@gmail.com"
user.address = "dkfkdjkfdj"
// console.log(user)


const user1 = {   
    id: 2323,
    email: "Arvaz@gmail.com",
    isUserLogged: false,
    full_name:{
       user_fullname: {
            first_name:"Arbaz",
            last_name: "Awan",
        }
    }
}
console.log(user1.full_name.user_fullname.first_name) // ? we'll use question mark to check if the value is present in the object
//  for combining objects
let ob1 = {1:"a", 2:"b"}
let ob2 = {3 : "c", 4 : "d"}
let ob3 = {5 : "e", 6: "f"}
// const ob4 = object.assign({}, ob1,ob2,ob3) // we use paranthesis because its a target and also it will help not store all the values in memory
const ob4 ={...ob1,...ob3}
console.log(ob4)

//  when we'll work with database  the user data from database gets in the form of array 

const users = [
    {
        id:1,
        email:"arbaz@gmail.com"
    },
    {
        id:1,
        email:"arbaz@gmail.com"
    },
    {
        id:1,
        email:"arbaz@gmail.com"
    },{
        id:1,
        email:"arbaz@gmail.com"
    },
]
console.log(users[1].email)


console.log(Object.keys(user)) // returns the value in the form of an array 
console.log(Object.values(user))
console.log(Object.entries(user)) // key value pair me return karega in the form of an array
// to check whether th property exists in the object or not 
console.log(user.hasOwnProperty("isLogged")) // kiye ap ke pass ye property hai 

//  DESTRUCTuRING AND JSON API talk
const obb1 = {
    name: "Arbaz",
    age: 34,
    classs: 34
  };
  
  // ob1.name
  // Destructuring using object in javascript 
  const{name : user} =obb1 // we can also rename it using :
  console.log(user);
  
  //  we can also destructure arrays we will do that in future 
  // apna kaam dosro per phenk dena ye api hai 
  //  backend se ata hai json mei 
  
  // zida tar value is format mein ayigi api se 
  // {
  //   "name":"Arbaz",
  //     "age": "34",
  //   "classes": "4"
  // }
  // aur kuch time array ke form me values ayegi 
  // [
  //   {},
  //   {},
  //   {}
  // ]
  





