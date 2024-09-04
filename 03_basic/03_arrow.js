const user  ={
    username:"Rabindra",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rabindra"
//     console.log(this.username)
// }
// chai();

// const chai = function (){
//     let username = "Hitesh"
//     console.log(this.username);
   
// }

const chai = () => {
    let username = "Hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(4,3))

// const addTwo = (num1,num2) => num1 + num2;
// const addTwo = (num1,num2) => ( num1 + num2 ); // implicit
const addTwo = (num1,num2) => ( {username: "rabindra"} );
console.log(addTwo(4,3))

// const myArray = [2,3,4,5,6]

// myArray.forEach(()=>{})
