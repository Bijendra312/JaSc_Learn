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
// console.log(result); // "mangoes are sweet. I love mangoes!"
// console.log(name.trim()); // "Bijendra Saha"
// console.log(name.match(/a/gi)); // ["a", "a", "a"]
// console.log(name.match(/a/g)); // ["a", "a", "a"]
// console.log(name.search(/Saha/));
// console.log(name.localeCompare("Bijendra Singh"));
// console.log("ä".localeCompare("z", "de")); // German locale: ä comes before z → negative
// console.log("ä".localeCompare("z", "sv")); // Swedish locale: ä comes after z → positive
// console.log("geeks".localeCompare("GEEKS", undefined, { sensitivity: "base" }));// 0
console.log("2".localeCompare("10"));// 1
console.log("2".localeCompare("10", undefined, { numeric: true }));// -1
