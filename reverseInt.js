// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9



/*// ANSWER 1
function reverseInt(n){
	// Handles logic if given number is negative, and appends
	// a '-' to the beginning of the string before parsing.
	// Otherwise, this solution follows the default logic
	// expected in the else statement below
	if(Math.sign(n) === -1){
		var string = n.toString();
		var newInt = string.split('').reverse().join('');
		newInt = '-' + newInt;
		newInt = parseInt(newInt);
		return newInt;
	}
	// Handles default expected logic, turning number into a 
	// string, reversing and then parsing back into a number
	else {
		var string = n.toString();
		var newInt = string.split('').reverse().join('');
		newInt = parseInt(newInt);
		return newInt;
	}
}*/


// ANSWER 2
function reverseInt(n){
	const reversed = n
		.toString()
		.split('')
		.reverse()
		.join('');
	return parseInt(reversed) * Math.sign(n);
}


// TESTS
console.log(reverseInt(51));
console.log(reverseInt(189));
console.log(reverseInt(-21));
console.log(reverseInt(30));