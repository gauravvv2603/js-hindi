const name = "Gaurav"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and  my repo Count is ${repoCount}`); // it must be use except the old one 


 const gameName = new String("gaurav-gaurav")

 console.log(gameName [0]); //indexing
console.log(gameName .__proto__); // indexing


console.log(gameName.length);
console.log(gameName. toUpperCase()); // it convert into uper case to all string 

console.log(gameName.charAt(2));  //which char place on index
console.log(gameName.indexOf("t")); // which index no. present on char place

const newString = gameName.substring(0,4) //start stop string
console.log(newString);

const anotherString = gameName.slice(-8,4) // slice function 

const newStringOne = '      gaurav      '
console.log(newStringOne);
console.log(newStringOne.trim()); // trim it remove the unwanter space for the string 

const url = "https://google.com/google%20gpt"
console.log(url.replace('%20', '%30'));       // it help to update new element 
console.log(url.includes("gaurav"));     // includes it help to find and object from the string or anythings else . it give output  in boolean expresion

console.log(gameName.split("-")); // split it help to split the values 






