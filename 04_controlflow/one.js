// if 
// const isUserloggIn = true;
const temperature = 41;
// if (temperature === 40) {
//     console.log("less than 50")
// } else {

//     console.log("temperature is greater than 50");
// }

// if(false){

// }
// comparison
// <, > , <=, >=, ==, !=, ===


// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`);

// const balance = 1000;

// // if(balance > 500) console.log("test"), console.log("test"); // no proper format

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");

// }

const isUserloggIn = true;
const debitCard = true;
const loggedInFormGoogle = false;
const loggedInFromEmail = true;

if(isUserloggIn && debitCard){
    console.log("Allowd to buy");   
}

if(loggedInFormGoogle || loggedInFromEmail){
    console.log("User Loggin in");   
}