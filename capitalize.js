// --- Directions
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//  capitalize('a short sentence') --> 'A Short Sentence'
//  capitalize('a lazy fox') --> 'A Lazy Fox'
//  capitalize('lookm it is working!') --> 'Look, It Is Working!'

function capitalize(string){
	const words = [];
	string = string.split(' ');

	for(let word of string){
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
}


// TESTS
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));