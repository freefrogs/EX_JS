var	list = document.getElementById('list'),
	add = document.getElementById('addElem');

function addOnClick(param) {
	var element = document.createElement('li'),
		n = document.getElementsByTagName('li').length;
	element.innerHTML = "item " + n;
	list.appendChild(element);
}

add.addEventListener('click', function(e) {
	addOnClick();
});