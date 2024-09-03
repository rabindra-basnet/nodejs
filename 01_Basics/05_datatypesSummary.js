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
