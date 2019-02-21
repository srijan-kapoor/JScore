// var tagArray = [{name: "hello"}];

const input = document.body.querySelector('input')
const tag = document.querySelector('.tag');
const tagText = document.querySelector('.tag-text');
const test = document.querySelector('.test');

// To create a tag add it to the div element
function addTag(e){
    if (tagText.value === '') {
        return alert("Enter text to create a tag");
    }
    else if (e.keyCode==13) {
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
};

// To remove the div element containing the tag
function remove(e) {
	if (e.target.classList.contains('delete')) {
      test.removeChild(e.target.parentNode);
      return;
    }
}

// Event Listeners
input.addEventListener('keyup', addTag)
tag.addEventListener('click', remove)



