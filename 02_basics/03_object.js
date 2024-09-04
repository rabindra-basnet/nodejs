// for Object.setPrototypeof
// function Circle() {}
// const shape = {};
// const circle = new Circle();

// // Set the object prototype.
// // DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
// Object.setPrototypeof = (shape ,circle);

// // Get the object prototype
// console.log(shape === Circle); // false

// const tinderUser = new Object({
//     name:"Rabindra",
//     Address: "Kathmandu"
// }); //singleton

// console.log(tinderUser);

const tinderUser = {}
// add elements 
tinderUser.id = "1234"
tinderUser.name = "Rabindra"
tinderUser.isLoggIn = false
// console.log(tinderUser);

// const regularUser = {
//     email:"some@gmail.com",
//     fullName:{
//         userFullname:{
//             firstName:"Rabindra",
//             lastName:"Basnet"
//         }
//     }
// }
//deepcopy
// const deepcopy = JSON.parse(JSON.stringify(regularUser)) 
// deepcopy.email= "rabindra@gmail.com"
// console.log(deepcopy);

//shallowcopy

// const shallowCopy = {...regularUser}; // spread
// shallowCopy.fullName.userFullname.firstName = "Rabin"
// console.log(shallowCopy)
// console.log(regularUser);


// console.log(regularUser.fullName?.userFullname);

const obj1 = {1:"A", 2:"B"
}
const obj2 = {3:"C", 4:"D" }
const obj4 = {5:"E", 6:"F" }
// const ob = {obj1, obj2}
// copy 
// const obj3 = Object.assign(obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4 }
// console.log(obj3);
// console.log(obj3 ===  obj1);

const users = [
    {
        id:1,
        email:"rabi@href"
    },  {
        id:1,
        email:"rabi@href"
    },  {
        id:1,
        email:"rabi@href"
    },  {
        id:1,
        email:"rabi@href"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggIn'));
