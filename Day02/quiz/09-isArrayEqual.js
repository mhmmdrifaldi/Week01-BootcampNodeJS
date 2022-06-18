function isArraysEqual(arrayA, arrayB) {
  const arr = arrayA.join(" ");
  const arr1 = arrayB.join(" ");
  
  if (arr === arr1) {
    return true;
  } else {
    return false;
  }
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
