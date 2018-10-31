// --- Directions
// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e',
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// SOLUTION 1
function vowels(string){
	let vowelCount = 0;
	const check = ['a', 'e', 'i', 'o', 'u'];

	for(let char of string.toLowerCase()) {
		if(check.includes(char)) {
			vowelCount++;
		}
	}
	console.log(`${string} --> ${vowelCount}`);
}


// TESTS
vowels('Hi There!')
vowels('Why do you ask?')
vowels('Aeiou')
vowels('sdfghjkl')


/*SOLUTION 2
function vowels(string){
	const matches = string.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

TESTS
console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))
console.log(vowels('Aeiou'))
console.log(vowels('sdfghjkl'))*/