// Class Pattern

class userCreator {
	constructor(name,score) {
		this.name = name;
		this.score = score;
	}
	increaseScore(){
		return this.score++;
	}
	sayName(){
		return this.name;
	}
}
class PaidUserCreator extends userCreator{
	constructor(name,score,balance) {
		super(name, score, balance);
		this.balance = balance;
	}
	increaseBalance(){
		return this.balance++;
	}
}

let Bob = new userCreator('Bob', 23)






