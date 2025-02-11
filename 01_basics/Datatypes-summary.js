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


