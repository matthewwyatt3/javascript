// // day 1
// // log out into the console a string that says "Hello World!"
// // console.log("Hello World!");



// // day 2 - variables and console.log
// // var myName = "Matthew";
// // var myAge = 33;
// const myName = "Matthew";
// let myAge = 33;
// // log out into the console myName and myAge the ES5 way
// // console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// // Log out into the console myName and myAge the ES6 way
// console.log(`Hello, ${myName}! You are ${myAge} years old.`);

// // Day 2 - date
// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hour = today.getHours();
// // console.log(day, month, year, hour);
// console.log(`${month}/${day}/${year}`);

// // day 2 - math
// // Gets random number between 0 and 1
// // const rand = Math.random();
// // Gives a random number, then multiplies it by ten. Next, add one so it does not give zero. Finally, rounds down the number.
// const rand = Math.floor((Math.random() * 10 ) + 1);
// // console.log(rand);

// simple popup box
// alert(rand);

// user click cancel or ok
// confirm(rand);

// accepts a users input
// prompt(rand);

// accepts the users input, then alerts that input
// let firstName = prompt("please enter your first name:");
// console.log(firstName);
// let lastName = prompt("Please enter your last name:");
// alert(lastName);
// let birthday = prompt("Please enter your date of birth:");
// window.confirm(birthday);
// alert(birthday);


// day 3
// === Strict comparison
// == Loose comparison
// ! Not
// !== Strict not comparison
// != Loose not comparison
// > Greater than
// < Less than
// >= Greather than or equal to
// <= Less than or equal to

// const userInput = prompt("Please enter a number:");
// if (1 == userInput) {
//   console.log("I am here");
//   // console.log(!true);
// } else {
//   console.log("in the else")
// }

// day 3 - logical operators

// const userInput = prompt("Please enter a number:");
// if (userInput == 1 || userInput == 5 || userInput == 15) {
//   console.log("I am here.");
// }  else {
//     console.log("In the else.");
//   }
// if (userInput > 5 && userInput < 10) {
//   console.log("I am here.")
// } else {
//   console.log("In the else");
// }

// day 3 - else if
// if (userInput > 5) {
//   console.log("number is greater than five");
// } else if (userInput < 5) {
//   console.log("Number is less than five");
// } else if (userInput === "5") {
//   console.log("User entered a five");
// } else if (userInput === "") {
//   console.log("User input nothing");
// } else {
//   console.log("User did not enter a number");
// }

// day 3 - switch
// const today = new Date().getDay();
// // console.log(today);
// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
// }

// day 3 - Math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;

// let myNum = 1;
// // increment
// // myNum++
// // decrement
// // myNum--
// // myNum = myNum + 3;  WRONG way
// // myNum += 3; CORRECT way
// myNum += 45;
// myNum -= 45;
// myNum *= 45;
// myNum /= 45;
// console.log(myNum);


// day 4 - arrays and loops

// let myArray = ["Red", "Blue", "Green", "Purple", "Black", "Gray", "White"];
// let Red = myArray[0];
// console.log(myArray[1]);
// console.log(myArray.length);

// let about = ['Matthew', 33, 'Geek', true];
// console.log(about);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums));
// nums.push(10, 11, 12);
// nums.unshift(0);
// nums.pop();
// nums.shift();
// nums.splice(1, 4);
// let slice = nums.slice(3, 6);

// let lastIndex = myArray.lastIndexOf('White');
// console.log(lastIndex);
// console.log(myArray.reverse());
// console.log(myArray.sort().reverse());

// console.log(nums);
// console.log(slice);
// let color = myArray.indexOf('Green');
// // console.log(myArray[color]);
// myArray.splice(color, 1);
// console.log(myArray);


// day 4 - loops
// let num = 0;
// while (num < 10 ) {
//   console.log(num);
//   num++;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(num);
// }
// do {
//   num++;
//   console.log(num);
// } while (num < 10);
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// console.log(num);

// let myFavoriteMovies = [];
// let firstFavorite = ['Alien', '1979'];
// let secondFavorite = ['Predator', '1987'];
// let thirdFavorite = ['A Clockwork Orange', '1971'];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// // console.log(myFavoriteMovies[2][1]);
// let movieYears = [];
// // movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// for (let i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1])
// }
// console.log(movieYears);

// Day 4 - take home, TODO

let todos = [];
let todo1 = prompt('Hey there, what you doing?', 'Eat cheese', '')
let timeframeOne = prompt('How long should this take you? (in days)', '1')
let todo2 = prompt('Hey there, what you doing?', 'Eat cheese', '')
let timeframeTwo = prompt('How long should this take you? (in days)', '1')
let todo3 = prompt('Hey there, what you doing?', 'Eat cheese', '')
let timeframeThree = prompt('How long should this take you? (in days)', '1')

let todoOneArray = [todo1];
let todoOneArray = [todo2];
let todoOneArray = [todo3];

todos.push(todoOneArray, todoTwoArray, todoThreeArray);

for(let i = 0; i < todos.length; i++) {
  let timeframe = prompt(`How long should ${todos[i]} take? (Please provide in days)`, '1');
  let transformed = parseInt(timeframe);
  if(!isNan(transformed){
    todos[i].push()
  } else {
    todos[i].push(1);
  };
}

let n = 0;
let max = 0;
while(n < todos.length) {
  if(max < todos[n][1]) {
    max = todos[n][1];
  }
  n++;
}

let m = 0;
do {
  if(todos[m][1] === max) {
    console.log(todos[m]);
  } else {
    todos[m].push('easy-peasy');
    alert(todos[m]);
  }
  m++
} while(m < todos.length)
