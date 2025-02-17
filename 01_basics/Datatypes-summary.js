// Primitive

//7 types : String, Number, Boolean, null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3967372487n

//Reference(non primitive)

//Array,Objects,Functions

const fruits = ["mango","apple"]; 

let myObj = {
  name:"aditi",
  age:22,
}

const myFunction = function(){
  console.log("Hello  world");
  
}

console.log(typeof fruits)

//++++++++++++++++++++++

//stack(primitive),Heap (Non-primitive)

let myYoutubename = "aditisalunkhedotcom"

let anothername = myYoutubename

anothername = "codewithme"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email:"user@google.com",
  upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



