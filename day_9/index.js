var tagArray = [{name: "hello"}];

const tag = document.querySelector('.tag');
const tagText = document.querySelector('.tag-text');
const button = document.querySelector('.btn');
// const cancel = document.querySelector('.delete');
const test = document.querySelector('.test');

document.body.querySelector('input').addEventListener('keyup', function(e){
if (e.keyCode==13) {
		const button = document.createElement('button'); 
		button.classList.add('btn');
    button.innerText= tagText.value;

    const cross = document.createElement('span');
    cross.classList.add('delete');
    cross.innerText = " x";

    button.appendChild(cross);
    test.appendChild(button);
    tagText.value='';
}
});

function remove(e) {
	if (e.target.classList.contains('delete')) {
      test.removeChild(e.target.parentNode);
      return;
    }
}

tag.addEventListener('click', remove)



