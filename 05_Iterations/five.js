const coding = ['js', 'rb', 'py', 'swift','go']

// coding.forEach(function(item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);  
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})






// Quize 

// const myFun = () =>{
//     console.log(x)  // references error
//     const x = "Hello world"
// }
// myFun()

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },{
        languageName:"Python",
        languageFileName:"PY"
    },{
        languageName:"Hyper text transfer protocol",
        languageFileName:"HTML"
    },{
        languageName:"Cascading style sheets",
        languageFileName:"CSS"
    },{
        languageName:"GoLang",
        languageFileName:"GO"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})