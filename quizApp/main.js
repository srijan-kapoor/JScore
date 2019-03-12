// Data Array of objects

var data = [
		{
			prompt: 'What is not a principle of Object Oriented Programming',
			answers: [
				'Abstraction',
				'Encapsulation',
				'Inheritence',
				'Polymorphism',
				'Impressionism'
			],
			correctIndex: 4
		},{
			prompt: 'What type of inheritence pattern is utilized in JavaScript?',
			answers: [
				'Prototypal',
				'Classical',
				'Trust'
			],
			correctIndex: 0
		},{
			prompt: 'Which is better? Functional Programming or Object Oriented Programming?',
			answers: [
				'Object Oriented Programming',
				'Functional Programming',
				'Neither, everything has its uses'
			],
			correctIndex: 2
		},
			{
				prompt: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
				answers: [
					'last()',
					'put()',
					'push()',
					'None of the Above'
				],	
				correctIndex: 2
		},{
				prompt: 'Which of the following function of String object returns the character at the specified index?',
				answers: [
					'charAt()',
					'charCodeAt()',
					'concat()',
					'indexOf()'
				],
				correctIndex: 0
		},{
				prompt: 'Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?',
				answers: [
					'reverse()',
					'shift()',
					'slice()',
					'some()'
				],
				correctIndex: 3
		},{
				prompt: 'Which of the following function of String object executes the search for a match between a regular expression and a specified string?',
				answers: [
					'concat()',
					'match()',
					'replace',
					'search'
				],
				correctIndex: 3
		},{	
				prompt: 'Which JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
				answers: [
					'Client-side',
					'Server-side',
					'Local',
					'Native'
				],
				correctIndex: 0
		},{
				prompt: 'What does the <noscript> tag do?',
				answers: [
					'Enclose text to be displayed by non-JavaScript browsers.',
					'Prevents scripts on the page from executing.',
					'Describes certain low-budget movies.',
					'None of the Above'
				],
				correctIndex: 0
		},{
				prompt: 'Which of the following is not considered a JavaScript operator?',
				answers: [
					'new',
					'this',
					'delete',
					'typeOf'
				],
				correctIndex: 1
		},
	];

// Model using Class Pattern

class Question{
	constructor(prompt,answers,correctIndex){
		this.prompt = data.prompt;
		this.answers = data.answers;
		this.correctIndex = data.correctIndex;
	}
	checkAnswer(index) {
		return index === this.correctIndex;
	}
	forEachAnswer(callback, context) {
		this.answers.forEach(callback,context);
	}
}

// Quiz object to keep track of questions

class Quiz{
	constructor(numberCorrect, counter, questions) {
		this.numberCorrect = 0;
		this.counter = 0;
		this.questions = [];
	}
	addQuestions(data){
		for (let query of data){
			this.questions.push(new Question(data[i]));
		}
	}
	advanceQuestion(lastAnswer){
		if(this.currentQuestion && this.currentQuestion.checkAnswer(lastAnswer)) {
			this.numberCorrect++;
		}
		this.currentQuestion = this.questions[this.counter++];
		return this.currentQuestion;
	}
}

// Logic Control

class QuizHour{
	constructor(data, intro, end, quizContent){
		this.data = data;
		this.intro = new Intro('#quiz-intro', this);
		this.end = new End('#quiz-end', this);
		this.quizContent = new QuizContent('#quiz-content', this);
		this.intro.attachEventHandlers();
		this.end.attachEventHandlers();
		this.quizContent.attachEventHandlers();
	}
	startQuiz(){
		this.quiz = new Quiz(this.data);
		this.intro.toggle(true);
		this.end.toggle(true);
		this.quizContent.toggle(false);
		this.nextQuestion();
	}
	nextQuestion(answer){
		var nextQuestion = this.quiz.advanceQuestion(answer);
		if (nextQuestion) {
			this.quizContent.setQuestion(nextQuestion);
		} else {
			this.endQuiz();
		}
	}
	endQuiz(){
		this.quizContent.toggle(true);
		this.end.toggle(false);
		this.end.displayEndMessage(this.quiz.numberCorrect, this.quiz.questions.length);
	}
}

// View Control
// Quiz Intro

class Intro{
	constructor(element, startButton, quizHour){
		this.element = document.getElementById('quiz-intro')
		this.startButton = document.querySelector('.begin');
		this.quizHour = quizHour;
	}
	// attaching event handlers to the start button
	attachEventHandlers(){
		var self = this;
		this.startButton.click(function() {
			console.log('hey');
			self.quizHour.startQuiz();
		});
	}
	toggle(hide){
		document.toggleClass('hidden', hide);
	};
}

// Quiz End

class End extends Intro{
	constructor(element,resetButton,quizEndMessage, quizHour){
		super(element, quizHour);
		this.element = document.getElementById('quiz-end')
		this.resetButton = document.querySelector('.reset-quiz');
		this.quizEndMessage = document.querySelector('.quiz-end-message');
		// this.quizHour = quizHour;
	}
	displayEndMessage(numberCorrect, totalQuestions){
		var message = `You got + ${numberCorrect} + questions correct out of + 
			${totalQuestions} + . Would you like to try again?`;
		this.quizEndMessage.html(message);
	}
}

// Question pop-up

class QuizContent{
	constructor(selector,quizHour){
		// super(selector,quizHour);
		this.element = document.getElementById('quiz-intro')
		this.quizHour = quizHour;
		this.submitAnswer = document.querySelector('.submit');
		this.questionContainer = document.querySelector('.question-container');
		this.answersContainer = document.querySelector('.answers-container');
	}
	attachEventHandlers() {
		var self = this;
		this.submitAnswer.click(function(){
			var checkedInput = self.answersContainer.querySelector('input:checked');
			if (!checkedInput.length) alert('Please select an answer');
			else {
				var answer = +checkedInput.val();
				self.quizHour.nextQuestion(answer);
			}
		});
	}
	setQuestion(){
		var radios = '';
		this.questionContainer.text(question.prompt);
		question.forEachAnswer(function(answer, index) {
			radios += 
				'<li>' +
					'<input type="radio" name="answer" value="' + index + '" id="answer' + index + '"></input>' +
					'<label for="answer' + index + '">' + answer + '</label>' +
				'</li>';
		});
		this.answersContainer.html(radios);
	};
}

var quizHour = new QuizHour(data);
document.addEventListener('click', Intro.attachEventHandlers)
