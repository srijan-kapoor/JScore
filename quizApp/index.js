var quizContent = document.getElementById('quiz-content');
var screen = document.getElementById('start-screen');
const begin = document.body.querySelector('.begin');

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

var num = Math.floor(Math.random()* data.length);

class Quiz{
	constructor(quizContent, prompt, answers, correctIndex){
		this.element = quizContent;
		this.question = prompt;
		this.option = answers;
		this.correct = correctIndex;
		// this.currentIndex = 0;
	}
	newQuestion(){
		// console.log(this);
		screen.innerHTML = "";
		var html = "";
		html += 
		`<div class="quiz-content">
			<p class="question-container"></p>
			<ul class="answers-container"></ul>
		</div>
		<div>
			<button class="btn submit">Submit Answer</button>
		</div>`
	// 	for (let elem of data){
	// 		document.querySelector('p').innerHTML = data[elem].prompt;
	// 		document.querySelector('li').innerHTML = data[elem].answers; 
	// 	}
		this.element.innerHTML = html;
	}
}

var x = new Quiz(quizContent);
begin.addEventListener('click', function(e) {
	x.newQuestion();
})