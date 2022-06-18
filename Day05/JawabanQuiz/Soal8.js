//soal 8
function checkPermute(stringOne, stringTwo) {
	//buat isi function untuk menentukan nilai checkPermute di console jika length
	//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
	//jumlah kata dari masing2 inputan perjumlah sama atau tidak

	const data = stringOne.split("").sort().join("");
	const data2 = stringTwo.split("").sort().join("");

	if (stringOne.length == stringTwo.length) {
		if (data === data2) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aaa")); //false;