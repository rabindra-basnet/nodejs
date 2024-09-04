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


// important discussion about shallow copy and deep copy

/*
Shallow copy: creates an new object or element and  doesnot creates copies of elements but references the nested elements to new copy same to previous elements
so, the nested elements have original references and does changes on original if we make changes on shallow copy element;
*/
// Original array with nested objects
const originalArray = ["Charlie",{ name: "Alice" }, { name: "Bob" }];

// Shallow copy using the slice method
const shallowCopy = originalArray.slice();
console.log(shallowCopy)

// Modifying the shallow copy
shallowCopy[1].name = "Rabindra";

console.log(originalArray[1].name); // Output: "Rabindra"
console.log(originalArray[1]); // Output: {name: "Rabindra"}

/* 
Deep Copy: means having infependent memory and copies all to the new memory and become unique in terms of manipulation of old array
*/
// Original array with nested objects
const originalArray1 = [{ name: "Alice" }, { name: "Bob" }];

// Deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(originalArray1));

// Modifying the deep copy
deepCopy[0].name = "Charlie";
console.log(deepCopy); // Output: "Alice"
console.log(originalArray1); // Output: "Alice"
