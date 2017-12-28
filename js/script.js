// funkcja
function getTriangleArea(a,h) {
	var dataCheck = a > 0 && h > 0 ? a * h / 2 : 'incorrect data';
	return dataCheck;
}

console.log(getTriangleArea(8,3));

// zmienne przechowujące dane
var triangle1Area = getTriangleArea(12,3),
	triangle2Area = getTriangleArea(10,4),
	triangle3Area = getTriangleArea(5,3);