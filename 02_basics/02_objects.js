//singleton
// Object.create

//objects literals
//symbol
const mySym = Symbol('key1')

const jsUser ={
    name:"Rabindra",
    "fullName": "Rabindra Basnet",
    [mySym]: "mykey1",
    age:18,
    location: "ktm",
    email:"rabi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


jsUser.email ="Rabindra@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "Rabindra@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello users");   
}
jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());



