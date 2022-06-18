function isPalindrome(word) {
  const arr = ("" + word.toLocaleLowerCase()).split("");
  const arr1 = [];

	for(let i = 0; i < arr.length; i++) {
		const hasil = arr[arr.length - (i + 1)]
  	arr1.push(hasil)
	}
		
	const kata = arr.join("")
	const kata1 = arr1.join("")
	
	if(kata === kata1) {
		return true
	} else {
		return false
	}
}

console.log(isPalindrome("kasur ini rUsak")); //true
