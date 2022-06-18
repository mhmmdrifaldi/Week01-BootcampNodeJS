/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka) {
  const arr = ("" + angka).split("");
  const arr1 = []

  for(i = 0; i < arr.length; i++) {
    const hasil = arr[arr.length - (i + 1)]
    arr1.push(hasil)
  }

  const nilai1 = arr.join("")
  const nilai2 = arr1.join("")
  
  if(Number(angka)) {
    if(nilai1 === nilai2) {
      return angka + " is palindrome";
    } else {
      return angka + " is not palindrome";
    }
  } else {
    return angka + " is not an number";
  }
}

console.log(isPalindrome("abcd")); //abcd is not an number
console.log(isPalindrome("123a")); //123a is not an number
console.log(isPalindrome("1234")); //1234 is not palindrome
console.log(isPalindrome(1221)); //1221 is palindrome
console.log(isPalindrome("8888")); //8888 is palindrome