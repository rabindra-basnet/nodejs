// var c = 300;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30
    // console.log( a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two();
    
}
one();

if(true){
    const username ="Arnn";
    if(username ==="Arnn"){
        const wesite = " youtube"
        // console.log(username + wesite);
    }
    // console.log(wesite)
}
// console.log(username)


// ******** interesting **************

console.log(addOne(5));
function addOne(value){
    return value + 1;
}

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5))
