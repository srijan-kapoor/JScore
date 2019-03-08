/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
Returns the sum of the arguments
*/

// Write the function here
var add = 0;
function sum(...num) {
	var array = [...num];
	for(var i=0; i<array.length; i++) {
	add += array[i];
    }
	return add;
}

// Tests
sum(1, 31);
// 35

sum(10, 200, 5);
// 215

sum(2, 5, 80, 1, 10, 12);
//110

// Select all the `p` tag and convert it into array using spread and add `click` event listener that alert `You clicked me!`
var p = document.querySelectorAll('p');
// var pArray = Array.from(p);
p.forEach(el => el.addEventListener('click', message))
	function message(e){
		alert('You clicked me');
	};

// Find the minimum value in the array below using spread and Math.min()
let numbers = [9, 4, 7, 1, 21, 233, 42];
Math.min(...numbers)

// Find the maximum value in the array below using spread and Math.max()
let sampleArr = [1, 9, 17, -3, 7, 89, 40, 100, 121, 8];
Math.max(...numbers) 
