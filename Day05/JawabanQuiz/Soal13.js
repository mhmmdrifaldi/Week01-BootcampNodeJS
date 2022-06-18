//soal 13
const findSum = (arr, weight) => {
	let hasil = "";

	for (let i = 0; i < arr.length; i++) {
  	for (let j = i+1; j < arr.length; j++) {
    	if (arr[i] + arr[j] == weight) {
    		hasil = arr[i] + " & " + arr[j];
				//console.log(arr[i] + ' & ' + arr[j]);
    	}
  	}
	}
	return hasil
};

console.log(findSum([1, 2, 3, 4, 5], 5)); // 4 & 5
