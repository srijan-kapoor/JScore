// PseudoClassical Pattern

function paidUserCreator(name,score,balance) {
	userCreator.call(this, name, score);
	this.balance = balance;
}

function userCreator(name,score) {
	this.name = name;
	this.score = score;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

// Inheritence
paidUserCreator.prototype.increaseBalance = function() {
	return this.balance++;
}
userCreator.prototype.sayName = function() {
	return this.name;
}
userCreator.prototype.increaseScore = function() {
	return this.score++;
}

// Object.setPrototypeOf(paidUserCreator, userCreator);

var Rambo = new paidUserCreator('Rambo', 324, 56000)





