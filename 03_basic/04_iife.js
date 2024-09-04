// immediately invoked function expressions
// const name = "Global DB CONNECTED";
// (function chai(){
//     // name iiFE 
//     console.log(`DB CONNECTED`);
    
// })();
// console.log(name); // Output: Global DB CONNECTED


/* sometimes it has problem with global scope pollution 
so we use this to remove declaration */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("hitesh");

/*
An IIFE is used to create a private scope for variables and functions,
 avoiding polluting the global namespace.

useful for creating private scopes, avoiding global variable conflicts, 
encapsulating code, and managing asynchronous operations.
*/

//Asynchronous 
for (var i = 0; i < 3; i++) {
    (function (index) {
      setTimeout(() => {
        console.log(index); // Correctly logs 0, 1, 2
      }, 100);
    })(i);
  }
  

//prevent conflicts from thirdparty
(function () {
    // Third-party code that may use global variables or functions
    const $ = "This won't conflict with jQuery";
    console.log($);
  })(); 
  // Outside the IIFE, jQuery's $ is unaffected
  console.log(typeof $); // Depends on the actual context, such as "function" if jQuery is loaded.


// Encapsulating code 
const counterModule = (function () {
    let count = 0; // Private variable 
    return {
      increment() {
        count++;
        console.log(`Count: ${count}`);
      },
      reset() {
        count = 0;
        console.log("Count reset to 0");
      }
    };
  })();
  
  counterModule.increment(); // Output: Count: 1
  counterModule.increment(); // Output: Count: 2
  counterModule.reset();     // Output: Count reset to 0
  