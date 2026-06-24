// # primitive datatypes
// 7 types : string, num, boolean, null, undefined, symbol, bigInt


/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1244')
console.log(id === anotherId);

const bigNumber = 34567876543n


// Reference (non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
     name: "gaurav",
     age: 22,
}

const myFunction = function(){
    console.log("hello world");

}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (Primitive), Heap (Non-Primitive),  

let myName  = "gaurav"

let anothername  = myName
anothername = "hitesh"

console.log(myName);
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let  userTwo = userOne

userTwo.email = "gaurav@google.com"

console.log(userOne.email);
console.log(userTwo.email);

