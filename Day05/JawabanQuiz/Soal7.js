//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1
	const arr = s.split("");
	let hasil = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "D") {
			hasil += -1;
		} else if (arr[i] == "U") {
			hasil += 1;
		}
	}

	if (hasil == 0) {
		if (arr[arr.length - 1] == "D") {
			hasil += -1;
		} else if (arr[arr.length - 1] == "U") {
			hasil += 1;
		}
	}

	return hasil;
}
console.log(countingValleys("UDDDUDUU")); //1