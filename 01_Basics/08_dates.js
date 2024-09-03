//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


// let newCreatedDate = new Date(2024,10,25)
// let newCreatedDate = new Date(2024,10,25, 5, 3)
// let newCreatedDate = new Date("2023-01-16")
let newCreatedDate = new Date("01-14-2024")
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log((newDate.getHours()) - 12);
// console.log((newDate.getMinutes()));
// console.log((newDate.getSeconds()));
// console.log((newDate.getMilliseconds()));
// console.log(newDate.getHours());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// ${newDate.getDay()} and time is
//  newDate.toLocaleString('default', {
//     weekday: "long",
//     hour:'2-digit',
//     minute:'2-digit',
//     second:"numeric",
//     hour12: true

// })
// console.log(myDate);
// console.log(newDate);
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  options.timeZone = "GMT";
  
const date = newDate.toLocaleString('en-Us', options)
// 'default', {
//     weekday: "long",
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: true
// }, );

console.log(date);

