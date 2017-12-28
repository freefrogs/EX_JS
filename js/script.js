var a = prompt('Enter a');
var b = prompt('Enter b');
var value = (a * a) - (2 * a * b) + (b * b);
console.log('Result of (a-b)^2 is: ' + value);

if (value > 0) {
	console.log('Result is higher then 0');
} else if (value < 0) {
	console.log('Result is lower then 0');
} else {
	switch (value) {
		case 0:
			console.log('Result is equal 0');
			break;

		default:
			console.log('Result is not a number');
	}
}


