// zarori nahi hai ke ye sirf objects pr iterate kare lein of wala nhi karta 

const obj ={
    player_name : "Arbaz",
    Level : 0,
    potential : "unlimited"
}

for (const key in obj) {
    console.log(`${key} its properties ${obj[key]}` )
}



// for in se hum arrays ki bhi keys nikal sakte hai 


const myArray = ["Arbaz", "ldfjkj", 134];
for (const value in myArray) {
  console.log(myArray[value]);
}