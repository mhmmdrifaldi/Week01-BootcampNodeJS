//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15
const n = 15;
let hasil = "";
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    hasil += "OKYES ";
  } else if (i % 3 == 0) {
    hasil += "OK ";
  } else if (i % 4 == 0) {
    hasil += "YES ";
  } else {
    hasil += i + " ";
  }
}
console.log(hasil);