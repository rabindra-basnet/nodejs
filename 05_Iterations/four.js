const myObj = {
    js:"Javascript",
    cpp:"Cpp",
    rb: "Ruby",
    swift:"swift"
}

for (const key in myObj) {
    //  const element = object[key];
    console.log(`${key} shortcut for ${myObj}`);
    
}

const programming = ["js", "rb","py", "java", "cpp"]

for (const key in programming) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(programming[key])
}