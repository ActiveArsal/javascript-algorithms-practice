// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2]. [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 5, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]

/*
function chunk(arr, size) {
	const chunked = [];
	let index = 0;

	while (index < arr.length) {
		let part = arr.slice(index, index + size);
		chunked.push(part);
		index += size;
	}

	return chunked;
}

*/



function chunk(array, size){
	const chunked = [];
	index = 0;
	
	while (index < array.length) {
		let part = array.slice(index, index + size);
		chunked.push(part);
		index += size;
	}
	return chunked;
}

// TESTS
console.log(chunk([1, 2, 3], 3));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
































