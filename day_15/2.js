// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

// Define a function name calculateAge which returns the age of the person

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

// call the calculateAge function on each object


function Person(name, yearOfBirth, job) {
	this.name = name,
	this.yearOfBirth = yearOfBirth,
	this.job = job
	this.calculateAge = function() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		return `${this.name} is ${age} years old`;
	}
}

const first = new Person('John', '1990', 'teacher');
const second = new Person('Akbar', '1800', 'Employee');
const third = new Person('Zeus', '1296', 'Banker');

console.log(first.calculateAge());
console.log(second.calculateAge());
console.log(third.calculateAge());
