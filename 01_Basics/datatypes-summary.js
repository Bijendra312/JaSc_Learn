// Primitive
// Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.5; // Number
const isLoggedIn = true; // Boolean
const outsideTemp = null; // Null
let userName; // Undefined

const uniqueId = Symbol('id'); // Symbol
const anotherUniqueId = Symbol('id'); // Different Symbol
// console.log(uniqueId === anotherUniqueId); // false



// Reference(Non-Primitive)
// Object, Array, Function

const heroes = ['Batman', 'Superman', 'Wonder', 'Flash']; // Array
const user = {
  name: 'John',
  age: 30,
  isAdmin: false,
}; // Object
const greet = function() { // Function
  console.log('Hello!');
};

console.log(typeof heroes); // "object"
console.log(typeof user); // "object"   
console.log(typeof greet); // "function"
