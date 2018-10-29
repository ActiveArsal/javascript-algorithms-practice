// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// 'fizz' instead of the number and for the multiples
// of five print 'buzz'. For numbers which are multiples
// of both three and five print 'fizzbuzz'.
// --- Example
// fizBuzz(5);
// 1
// 2
// fizz
// 4
// buzz

function fizbuzz(num){
	for(let i = 1; i <= num; i++){
		if(i % 5 == 0 && i % 3 == 0){
			console.log('fizzbuzz')
		} else if(i % 5 == 0){
			console.log('buzz');
		} else if(i % 3 == 0){
			console.log('fizz');
		} else {
			console.log(i);
		}
	}
}

fizbuzz(15);