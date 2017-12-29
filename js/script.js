var femaleNames = ['Kinga', 'Emilka', 'Gosia', 'Zuza'],
	maleNames = ['Ariel', 'Kuba', 'Daniel', 'Marcin'],
	allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = prompt('Enter new name');

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log('The name was added to the list:' + allNames);
} else {
	console.log('The name is already on the list');
}
