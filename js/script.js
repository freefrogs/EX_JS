var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

var correctText = text.replace('Velociraptor', dinosaur);

console.log(correctText.substr(0, correctText.length / 2));