const name= "Bijendra Saha"; // String
const repoCount = 10; // Number
// console.log(`Hello ${name}, your repo count is ${repoCount}`); // Template Literal

const gameName = new String("Cricket"); // String Object
// console.log(gameName[0]); // "C"

// console.log(gameName.__proto__); // String.prototype

// console.log(gameName.length); // 7
// console.log(gameName.toUpperCase()); // "CRICKET"

// console.log(gameName.charAt(0)); // "C"
// console.log(gameName.indexOf('i')); // 2

// console.log(name.includes("Saha")); 
// console.log(name.slice(1, 4)); // "ije"
// console.log(name.substring(1, 4)); // "ije"
// console.log(name.slice(10, 4));// ""
// console.log(name.substring(10, 4)); 

// console.log(name.split(" ")); // ["Bijendra", "Saha"]
// console.log(name.split("")); // ["B", "i", "j", "e", "n", "d", "r", " ", "S", "a", "h", "a"]
// console.log(name.split("e")); // ["Bij", "ndra Saha"]
// console.log(name.replace("Saha", "Singh")); // "Bijendra Singh"

let sentence = "Apples are sweet. I love apples!";
let result = sentence.replace(/apples/gi, "mangoes");
console.log(result); // "Mangoes are sweet. I love mangoes!"