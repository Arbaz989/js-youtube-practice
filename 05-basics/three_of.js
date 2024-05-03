// for looop 
// commpon situation to use the code to get the value from database
//[{},{},{}]
//[[],[]]

let score = [2,2,2,3,3];
for (const i of score) {
    //console.log(i)
}

let alphabets = "arbaz awan"
for (const ii of alphabets) {
   // console.log(`alphabets of ${ii}`)
}



//  map will take values as in order and it will return the same value only once and we have 
// alot of functins in map 
const map = new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
map.set('WE',"West")
map.set('QT',"Qatar")
// console.log(map)
// for (const key of map) {
//     console.log(key)
// }
//  if you want to print each of them in without array than you need to destructure it 

for (const [key,value] of map) {
    console.log(key +':-'+value)
}




// thhis will not work 


// const obj ={
//     namee :"Arbaz",
//     clsss : "5",
//     level : 0
//  }

// for (const [key,value] of obj) {
//     console.log(key,value);
// }




//  for each



const coding = ["c++","python","java"]
coding.forEach(function (val) {    // callback function
    console.log(val);
})

//  using arrow functuin 
// coding.forEach(()=>{})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})




// function printme(item) {
//     console.log(item)
// }

// coding.forEach(printme);




const codingg =[
    {
        username : "atr"
     }
]

coding.forEach((item)=>{
    console.log(item.username)
})













