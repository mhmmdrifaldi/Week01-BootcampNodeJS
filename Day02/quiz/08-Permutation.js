const checkPermute = function (stringOne, stringTwo) {
  const data = stringOne.split("");
  const sortir = data.sort();
  const hasil = sortir.join("");

  if (stringOne.length == stringTwo.length) {
    if(hasil == stringTwo) {
      return true
    }
  } else {
    return false;
  }
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
