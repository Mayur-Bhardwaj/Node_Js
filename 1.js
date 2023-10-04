//Welcome To Node Js Series.


// what is node js?
// Node js is runtime environment for js. They contain some APIs.It is asynchronous.

console.log("Hello World");
//This is the frst file of node js.
// In node every file is module. Ex: In a file we make a function but we cannot used it outside the file to use
// outside the file we use export.

const link = require("./Link.js");
console.log(link.sum(4,5));

