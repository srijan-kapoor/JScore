const cards = document.querySelectorAll('.memory-card');

let isCardFlipped = false;
let firstCard, secondCard;
let count = document.querySelector('.moves');
let counter = 0;

function flipCard() {
	// this keyword represents the element which fired the event
	this.classList.add('flip');
	if (!isCardFlipped) { // it means user has clicked on the card for the first time
		
		isCardFlipped = true;
		firstCard = this;
	} else {
			// second click
		isCardFlipped = false; // it means user is clicking on the firstCard
		secondCard = this;

		checkMatch();
	}
	counter++
	count.innerHTML = counter+" move(s)";
}

startTimer();

// match cards
function checkMatch(){
	if (firstCard.dataset.key === secondCard.dataset.key) { 
	//if the cards match we removethe eventListener from them to avoid being clicked again
	firstCard.removeEventListener('click', flipCard)
	secondCard.removeEventListener('click', flipCard)
	} else {
	// cards don't match
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
	}, 300);
}
// console.log(firstCard.dataset.key);
// console.log(secondCard.dataset.key);
// to use the element defined in HTML we use dataset object	
}

// shuffle cards
(function cardShuffle() {
	cards.forEach(card => {
		let cardPosition = Math.floor(Math.random() * 16); 
		// numbers to go from 0-15
		card.style.order = cardPosition;
	});
})(); //IIFE: immediately invoked function expression

// game timer
var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"seconds";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
    // If succced count === 8
    // if(count === 8) clearInterval(interval)
}





cards.forEach(card => card.addEventListener('click', flipCard))

