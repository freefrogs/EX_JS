var rowTree = prompt('Enter the number of rows of the tree');

function drawTree(levelTree) {
	for (var i = 0 ; i < rowTree ; i++) {
		var star = '';
		for (var j = 0 ; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
}
console.log('Christmas Tree 1');
var chistmastree = drawTree(rowTree);

function drawTree2(levelTree2) {
	for (var k = 0 ; k < rowTree ; k++) {
		var gap = ' ',
			star2 = '*';
		gap = gap.repeat(rowTree - k-1);

		for (var l = 0 ; l < k ; l++) {
			star2 += '**';
		}
		console.log(gap + star2);
	}
}
console.log('Christmas Tree 2');
var chistmastree2 = drawTree2(rowTree);
