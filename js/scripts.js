// day 1
// log out into the console a string that says "Hello World!"
// console.log("Hello World!");

// day 2 - variables and console.log
// var myName = "Matthew";
// var myAge = 33;
const myName = "Matthew";
let myAge = 33;
// log out into the console myName and myAge the ES5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// Log out into the console myName and myAge the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`);

// Day 2 - date
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
// console.log(day, month, year, hour);
console.log(`${month}/${day}/${year}`);

// day 2 - math
// Gets random number between 0 and 1
// const rand = Math.random();
// Gives a random number, then multiplies it by ten. Next, add one so it does not give zero. Finally, rounds down the number.
const rand = Math.floor((Math.random() * 10 ) + 1);
// console.log(rand);

// simple popup box
// alert(rand);

// user click cancel or ok
// confirm(rand);

// accepts a users input
// prompt(rand);

// accepts the users input, then alerts that input
let name = prompt("please enter your name:");
alert(name);
