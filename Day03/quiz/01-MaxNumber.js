const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays){
	// cara 1
	// const max = Math.max.apply(null, arrays);
	
	// cara 2
	let max = arrays[0]
	for(i = 0; i < arrays.length; i++) {
		if(max < arrays[i]) {
			max = arrays[i]
		}
	}
	return max
}

console.log(maxNumber(numbers));