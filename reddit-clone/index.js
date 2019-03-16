var mainCard = document.querySelector('.card-content')
var textMain = '';

if (navigator.onLine == true){
	fetch('https://www.reddit.com/r/soccer.json')
		.then(res => res.json()
		.then(text => 
			document.querySelector('.post-container').innerHTML += 
			text.data.children.map(value => (
				`<div class="post">
								<div class="votes">
									<i class="fas fa-long-arrow-alt-up text-center"></i>
									<span class="vote-count text-center">${value.data.ups}</span>
									<i class="fas fa-long-arrow-alt-down text-center"></i>
								</div>
								<div class="post-content">
									<div>
										<span class="posted-by">Posted By <a href="#">u/${value.data.author}</a></span>
										<p class="title">${value.data.title}</p>
										<a href="#">${value.data.url.substring(0,40)+'...'}</a>
									</div>
									<div class="post-action">
										<i class="fas fa-comment-alt"></i>
										<span class="comment-number">${value.data.num_comments} Comments</span>
										<i class="fas fa-star"></i>
										<span class="comment-number">Give Award</span>
										<span><i class="fas fa-share"></i>Share</span>
										<span><i class="fas fa-bookmark"></i>Save</span>
										<i class="fas fa-ellipsis-h"></i>
									</div>
								</div>
					</div>`
			)).join('') 
			) 
		)
	}
		else if (navigator.onLine == false){
			document.querySelector('.post-container').innerHTML = "It seems you're not connected to the Internet."
		}


