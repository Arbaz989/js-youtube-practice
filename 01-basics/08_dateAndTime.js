let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())



const newDate = new Date(2023,0,23)
let dDate = new Date(2023,0,4 ,5,5)

console.log(newDate.toLocaleString())

const upDate = new Date("2023-03-01")
console.log(upDate.toLocaleString())


console.log(dDate.toLocaleString())

// *****I
let mytime = new Date()
// console.log(mytime)
// console.log(upDate.getTime())



// console.log(Math.floor(Date.now()/1000))

console.log(mytime.getFullYear())
mytime.toLocaleString('default',{ 
    weekday: "long", 
})