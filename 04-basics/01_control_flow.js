

if(1!=2){
    console.log(true)
}

const isuserLoggedIn = true
const  debitCard = true

const userGoogle = false
const userEmail = true 

if(isuserLoggedIn && debitCard&& 2==2){
    console.log("You are allowed")
}

if(userGoogle || userEmail){
    console.log(`you are partiallly allowed`)
}
const month = 3
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("defeault")
        break;
}

const month2 = "april"


switch (month2) {
    case "jan":
        console.log("jan")
        break;
    case "feb":
        console.log("feb")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;

    default:
        console.log("defeault")
        break;
}




// <,>,<=,>=, == ,== ,!=,!==