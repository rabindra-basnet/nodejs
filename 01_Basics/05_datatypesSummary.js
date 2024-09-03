//premitive datatypes
 
// 7 types: string, number, boolean, null, undefined, symbol, Bigint

const name = "Rabindra"
const dataId = 134
const isLoggedin = false
const tempdata = null
let state;

let userId = Symbol("123")
let anotherId = Symbol("123")

console.log(userId === anotherId);

const bigNumber = 1234532n


//references or non premitive 
 // Array
 //0bjects
 // functions

const heros = ["shaktiman", "nagraj", "dogo"]

let myObj = {
    name: "Rabindra",
    age: 22,
    // type: myFunction
}

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(myFunction());


// console.log(typeof bigNumber);

// **********************************************************************

// stack (primitive) , Heap (non-primitive)  memory

// stack

let myYoutubeName = "hiteshchaudarydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@gmail.cm"

console.log(userOne.email);
console.log(userTwo.email);
