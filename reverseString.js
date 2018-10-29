// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverseString(string){
	let reversed = '';
	for(let char of string){
		reversed = char + reversed;
	}
	return reversed;
}

console.log(reverseString('apple'));
console.log(reverseString('hello'));
console.log(reverseString('Greetings!'));