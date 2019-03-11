// Factory pattern

function paidUserCreator(name,score,balance) {
  var paidUser = Object.create(paidUserMethods);
	paidUser.name = name;
  paidUser.score = score;
	paidUser.balance = balance;
	return paidUser
}

var paidUserMethods = {
	increaseBalance : function() {
		return this.balance++;
    }
}

var user1 = paidUserCreator('James', 3, 30)

function userCreator(name,score) {
	var user = Object.create(userMethods);
	user.name = name;
	user.score = score;
	return user;
}

var userMethods = {
  increaseScore: function(){
      return this.score++;
  }, 
  sayName: function() {
      return this.name;
  }
}

Object.setPrototypeOf(paidUserMethods, userMethods);

 // paidUserMethods= Object.create(userMethods);



