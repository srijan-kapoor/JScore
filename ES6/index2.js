/* const
Answer following Questions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?
Change one line of code so, that error will go away.
Don't change lines 12, 17.
*/

const arr = [1, 2];
arr.push(3);
console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]

// const doesn't allow rebinding on variables, since they only have block scope, chnaging const to var allow us to rebind the variable arr

// Problem 2
// What's the output and why?
const person = {
  name: "Charlie",
  age: 28
};

person = "New Value";
console.log(person);

// const doesn't allow rebinding, same as above

// Problem 3
// What's the output and why?

const user = {
  name: "Jack",
  batch: 4
};

user.name = "Jones";

console.log(user.name);

// Jones
// using block scope of const we can re-assign it's value

// Problem 4
// What's the output and why?
{
  const ide = "Vs Code";
}
console.log(ide);

// Throws an uncaught error since we are trying to access ide outside the const block

// Problem 5
// What's the output and why?
for (const i = 0; i < 10; i++) {
  console.log(i);
}

// Throws uncaught error as we are re-assigning const which is not possible

// Problem 6
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";

// var has global scope, outputs pizza