//Array
const myArr = [1,2,3,5,6,7]
const myHeros = ['Shaktiman',"nagraj"]

const myArr2 = new Array(1,3,4,5, "Rabindra")

// console.log(myArr[1]);
// console.log(myHeros[1]);
// console.log(myArr2[1]);

//Array methods
// myArr.push('Rabindra')
// myArr.push('Rabindra')
// myArr.push('Rabindra')
// myArr.pop()

// myArr.unshift(0)
// myArr.unshift(1)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArray = myArr.join()

// console.log(myArr);
// console.log(typeof newArray);

//slice and splice

// console.log('A', myArr);

console.log(" ");
const myn = myArr.slice(1,3)
// console.log(myn);
// console.log('B', myArr);
// console.log(" ");

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log('C', myArr);

const stringArray = ["Blue", "Humpback", "Beluga", "Ram", "basnet", "apple"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];


// console.log(stringArray.sort());

// console.log(numberArray.sort((a, b) => a - b));



// ***************Methods new ************

const inventory = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
  ];

//   const result = Object.groupBy(inventory, ({}))
  const e = [1, 2, 3, 4, 5];
//   console.log(delete e[2]);
//   console.log(e);
  
  
//   multidimensional array 
const a = new Array(4);
// console.log(a);
// property
a.property = 1;
// console.log(a.property);

// for (let i = 0; i < 4; i++) {
//   a[i] = new Array(4);
//   for (let j = 0; j < 4; j++) {
//     a[i][j] = `[${i}, ${j}]`;
//   }
// }

// 
const marvel_heros = ['thor', "Ironman", "spiderman"];
const dc_heros = ['Superman', "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
// spread operators
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1,2,3,4,[7,8,9],10, [11,12,[13,14]]]
// flat means concludes all array inside array
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Rabindra"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2, score3));



