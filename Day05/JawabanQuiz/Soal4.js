//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai ānā
// Contoh output di bawah adalah ketika nilai ānā = 5

let segitiga = "";
for (let i = 1; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    segitiga += i + " ";
  }
  segitiga += "\n";
}
console.log(segitiga);
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let segitiga1 = "";
for (let i = 1; i < 6; i++) {
  for (let j = i; j > 0; j--) {
    segitiga1 += j + " ";
  }
  segitiga1 += "\n";
}
console.log(segitiga1);
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25
