// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// one string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there!', 'Bye there') --> false

function anagram(stringA, stringB){
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
	return string.replace(/[^\w]/g, '')
	.toLowerCase()
	.split('')
	.sort()
	.join('');
}

console.log(anagram('rail safety', 'fairy tales'));
console.log(anagram('RAIL! SAFETY!', 'fairy tales'));
console.log(anagram('Hi there!', 'Bye there'));