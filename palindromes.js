// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/*// ANSWER 1: Iterate through string to create a reversed string,
// and then compare it the original
function palindrome(string){
	var reversed = '';
	for(var i = 0; i < string.length; i++){
		reversed = string[i] + reversed;
	}
	return reversed === string;
}*/


/*// ANSWER 2: Compare string to itself but like, the cheat method 
function palindrome(string){
	return (string === string.split('').reverse().join(''));
}
*/



/*// TESTS
console.log(palindrome('lmao'));
console.log(palindrome('sss'));
console.log(palindrome('lol'));
console.log(palindrome('ddd'));*/