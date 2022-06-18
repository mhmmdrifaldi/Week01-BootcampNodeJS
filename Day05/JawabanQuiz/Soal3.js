//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
let segitiga = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= i + i - 1; j++) {
    segitiga += j + " ";
  }
  segitiga += "\n";
}
console.log(segitiga);
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9