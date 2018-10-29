// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("1231111") === "1"


function maxChar(string){
	let max = 1;
	const chars = {};
	let maxChar = '';

	for(let char of string){
		if(!chars[char]){
			chars[char] = 1;
		} else {
			chars[char]++;
			if(chars[char] > max){
				max = chars[char];
				maxChar = char;
			}
		}
	}
	
	return maxChar;
}



// TESTS
console.log(maxChar('abcccccccd'));
console.log(maxChar('1231111'));