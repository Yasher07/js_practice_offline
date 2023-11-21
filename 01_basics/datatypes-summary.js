// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 322165616516513155n;

// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "yasher",
  age: 25,
};

function myFunction() {
  console.log("Hello World");
}

console.log(typeof myFunction);
