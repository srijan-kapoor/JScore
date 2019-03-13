const username = document.querySelector('.input');
const userInfo = document.querySelector('.user-content')
let user = "";

// function to display followers 
function displayFollowers(data){
	const followers = document.querySelector('.followers')
	const following = document.querySelector('.following')
	var yourFollowersHTML = data.map(follower => (
		`<div class=" ">
	    <article class="tile is-child notification is-primary is-inline-block">
	    	<img src="${follower.avatar_url}" width= "200px" height="120px"></img>
	    	<p class="title">${follower.login}</p>
	    	<a class="button is-info is-hovered followers">Followers</a>
	    	<a class="button is-info is-hovered following">Following</a>
	    	<a class="button is-info is-hovered repo">Repository</a>
	  	</article>
		 </div>`)).join("");

	document.body.querySelector('.follow').innerHTML = yourFollowersHTML;
	// console.log(data)
}

// Model function to fetch data
const fetchData = (user, func, type = "") => {
	const URL = `https://api.github.com/users/${user}/${type}`;
	const newURL = type ? URL : URL.slice(0, URL.length - 1);
	const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => func(JSON.parse(xhr.response)));
		xhr.open('GET', newURL);
		xhr.send();
}
// yourRepo
function yourRepo(data){
	var yourRepository = data.map(repo => (
		`<div class=" ">
	    <ul class="tile is-child notification is-warning is-6 is-inline-block">
	    	<li class="title">${repo.name}</li>
	    </ul>
		 </div>`)).join("");

	document.body.querySelector('.repository').innerHTML = yourRepository;

}
// showRepo
function showRepo(event){
	if(event.target.classList.contains('repo')){
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => yourRepo(JSON.parse(xhr.response)));
		xhr.open('GET', `https://api.github.com/users/${user}/repos`);
		xhr.send();
	}
}

// function to get following users
function wing(event){
	if(event.target.classList.contains('following')){
		fetchData(user, displayFollowers, 'following')
	}
}
// function to retrieve followers
function follow(event){
	console.log('works')
	if(event.target.classList.contains('followers')) {
		fetchData(user, displayFollowers, 'followers')
	}
}

function show(data){
	console.log(data);
	var {value} = username;
	let html = 
	`<div class=" ">
    <article class="tile is-child notification is-dark is-inline-block">
    	<img src="${data.avatar_url}" width= "200px" height="120px"></img>
    	<p class="title">${data.login}</p>
    	<p class="subtitle">${data.bio}</p>
    	<a class="button is-primary is-hovered followers">Followers</a>
    	<a class="button is-primary is-hovered following">Following</a>
    	<a class="button is-primary is-hovered repo">Repository</a>
  	</article>
	 </div>`

	 document.body.querySelector('.user-content').innerHTML = html;

	const repo = document.querySelector('.repo')
	const followers = document.querySelector('.followers')
	const following = document.querySelector('.following')
	repo.addEventListener('click', showRepo)
	followers.addEventListener('click', follow);
	following.addEventListener('click', wing)
}

// Looking for the user in the API
function search(event){
	if(event.keyCode === 13){
		user = event.target.value;
		// const xhr = new XMLHttpRequest();
		// xhr.addEventListener('load', () => show(JSON.parse(xhr.response)));
		// xhr.open('GET', `https://api.github.com/users/${user}`);
		// xhr.send();
		fetchData(user, show)
	}
}


username.addEventListener('keydown', search);
