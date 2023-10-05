const fs = require('fs');
// const txt = fs.readFileSync("demo.txt");
// console.log(txt); //They give an bugffer answer. Ex: 12 34 34  12 3g 5j 67 3r 34 12 97 ....more bytes
// to resole this we use another parameter utf-8
const text = fs.readFileSync("demo.txt", "utf-8");
console.log(text);

//Asynchronous Method

const text1 = fs.readFile("demo.txt", "utf-8",(err,txt)=>{
    console.log(txt);
});

const t1 = performance.now(); // this is used to check the time that how much file to take for read.
console.log("Hello World");