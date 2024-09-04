// const userEmail = ["h@hitesh.ai"]
const userEmail = []

if(userEmail){
    // console.log("Git user email");
    
}
else{
    // console.log("DOn\'t have user email")
}

// falsy values
// false, 0, -0, BigInt(0)n, "", null, undefined, NaN
// console.log(false == 0);  // true
// console.log( 0 == -0 ); // true
// console.log(0 == BigInt(0)); 
// console.log(false == ""); //true
// console.log(null);
// console.log(false == undefined);
// console.log(false == NaN);

// truthy values
// "0", 'false', " ", [], {}, function(){} 
// console.log(true == "0")
// console.log(true == "false")
// console.log(true == " ")
// console.log(true == [])
// console.log(true == function(){})


// Array check
if(userEmail.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");    
}

// Nullich Coalescing operatior(??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;


console.log(val1);

// Ternary operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")