/* let*/

"use strict";

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i, "Inside");
}

console.log(i, "Outside");

// Expected Output
// 0 "Inside"
// 1 "Inside"
// 2 "Inside"
// 3 "Inside"
// 4 "Inside"
//10 "Outside"

// replace var with let inside the for loop

// Problem 2
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  // Doing nothing
}
console.log(i);

// Outputs 10 as there is nothing inside the for loop condition, the loop exists with i=10 and prints i.

// Problem 3
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  let username = "Superuser!";
}
console.log(username);

// throws error since username is a block scope variable

// Problem 4
// Write the output and reason behind it
let name = "Jack";
name = "Jones";
console.log(name);

// since there is no block scope defined for variable 'name' it outputs the updated value which is Jones

// Problem 5
// Write the output and reason behind it
let firstName = "Jack";
let firstName = "Jones";
console.log(firstName);

// Problem 6
// Write the output and reason behind it

let marks = 76;
let pass = false;

if (marks > 70) {
  let pass = true;
}

console.log(`Passed: ${pass}`);

// let has a block scope inside the if statement, therefore it only console logs 'pass' as false

// Problem 7
(function() {
  let pass = true;
})();
console.log(pass);

// throws error pass is not defined since variable pass only has scope inside IFFE

// Problem 8
{
  let users = 45;
}
console.log(users);

// users is not defined

// Problem 9
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";

// undefined
