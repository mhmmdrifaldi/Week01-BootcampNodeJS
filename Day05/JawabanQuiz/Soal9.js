//soal 9
function maxWordLength(params) {
	//buat function menentukan kata mana yang paling panjang lengthnya
	const arr = params.split(" ");
	let arr1 = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr1.length < arr[i].length) {
			arr1 = arr[i];
		}
	}
	return arr1;
}
console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp