
const name = "rabindra"
const repoCount = 50
// console.log(name + repoCount + " value"); old apporach
console.log(`my name is ${name} and my repocount is ${repoCount}`);
// another way for string decleratgion
const gameName = new String('rabindra-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));
// const newString = gameName.substring(0,4)
// console.log(newString);
// const anotherString = gameName.slice(-8,0)
// console.log(anotherString);
// const newStringOne = "  rabindra   "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// const url = "https://rabindra.com/rabindra%20basnet";
// console.log(url)
// console.log(url.replace('%20', '-'));
// // console.log(url.includes('rabi'));
// console.log(gameName.split('-'));
// console.log(gameName.blink()); //prints overall value of string
// console.log(gameName.link("hello"));
// console.log(gameName.repeat(3));
// // console.log(gameName.fromCharCode(189, 43, 190, 61));
// console.log(String.fromCharCode(189, 43, 190, 61))
// console.log(String.fromCodePoint(971, 973, 942, 0x2f804)) // symbol based on number and 
// console.log(String.raw`Hello everyone its me ${gameName}`); // path
// // console.log(String.apply())
// console.log(gameName.at(4))  // at(index)


// const icons = '☃★♲';

// console.log(icons.codePointAt(1));  //codepoint
// Expected output: "9733"

// for iswellFormed()

// const illFormedUrl = "https://example.com/search?q=\uD800";
// try {
//     encodeURI(illFormedUrl);
//   } catch (e) {
//     console.log(e); // URIError: URI malformed
//   }

//   if(illFormedUrl.isWellFormed()){
//     console.log(encodeURI(illFormedUrl));
    
//   }
//   else{
//     console.warn("Ill-formed strings encountered.");
//   }

// console.log("check".localeCompare("against"));


const regex = /[^\w\s\t']/g;
// console.log(gameName.search(regex));
