
function sayMyName() {
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
}
// sayMyName();

// function addTwoNumbers(number1, number2){ //parameters
//     console.log( number1 + number2
//     );
// }
function addTwoNumbers(number1, number2) { //parameters
    // let result = ( number1 + number2);
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(3, 8);  //arguments 

// console.log(`Results: ${result}`);

function loginUserMessage(username = "sam") {
    // if(username === undefined){
    //     console.log("please enter a username:");
    //     return;   
    // }
    if (!username) {
        console.log("please enter a username:");
        return;
    }
    return `${username} just loggin in`
}

// console.log(loginUserMessage("Rabindra"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

calculateCartPrice(3);
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username:"Rbaindra",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({
    username:"Sam",
    price:299
})

const myNewArray = [200, 4000, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 499, 500]));
