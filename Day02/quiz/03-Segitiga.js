/** buat segitiga  */

let segitiga = "";
for (let i = 5; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    segitiga += j + " ";
  }
  segitiga += "\n";
}
console.log(segitiga);
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let segitiga1 = "";
for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    segitiga1 += j + " ";
  }
  segitiga1 += "\n";
}
console.log(segitiga1);

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1