// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const iterator of arr) {
    console.log(iterator);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// maps takes unique as a key

// const map = new Map();
// map.set("IN", "India")
// map.set("NP", "Nepal")
// map.set("US", "United States of America")
// map.set("Fr", "France")
// map.set("IN", "India")
// map.set("INR", "India")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myobj = {
    "game1": "NFS",
    "game2":"Spider"
}
// not iterable
for (const [key, value] of myobj) {
    console.log(key, ':-', value);
}