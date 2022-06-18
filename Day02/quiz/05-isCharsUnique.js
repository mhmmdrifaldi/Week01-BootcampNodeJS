function isCharsUnique(string) {
  const arr = string.split("").sort();
  for (i = 0; i < arr.length; i++) { 
		for (j = i + 1 ; j < arr.length; j++) {
			if (arr[i] === arr[j]) { 
				return false
			} 
		}
	}
	return true
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false