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

//+++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primtive), Heap memory (Non-Primitive)

let myYoutubeName = "yasherarafath";

let anothername = myYoutubeName;
anothername = "AFD";

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
  email: "07yasher@gmail.com",
  upi: "yasher@ybl",
};

let userTwo = userOne;

userTwo.emil = "arafath@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
