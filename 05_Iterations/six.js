// const coding = ['js', 'rubby', 'java', 'python', 'cpp'];

// const value = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
    
// })
// console.log(value);

const myNums =[1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=> {
//     return num > 1
// });

const newNums =[];

// myNums.forEach( (num)=>{
//     if(num > 4){
//         newNums.push(num);
//     }
// });
// console.log( newNums,);

const books = [
    {
      title: "To Kill a Mockingbird",
      publish: "1960",
      genre: "Classic",
      edition: "1st Edition"
    },
    {
      title: "The Great Gatsby",
      publish: "1925",
      genre: "Romance",
      edition: "Revised Edition"
    },
    {
      title: "1984",
      publish: "1949",
      genre: "Dystopian",
      edition: "Penguin Edition"
    },
    {
      title: "Pride and Prejudice",
      publish: "1813",
      genre: "Romance",
      edition: "Oxford Edition"
    },
    {
      title: "The Catcher in the Rye",
      publish: "1951",
      genre: "Coming-of-age",
      edition: "Little, Brown and Company Edition"
    }
  ];


let userBooks = books.filter((bk) => bk.genre === "Romance")

userBooks = books.filter((bk) => {return bk.publish >= 1940})


console.log(userBooks);
