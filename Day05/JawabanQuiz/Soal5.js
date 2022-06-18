//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.
let penduduk = 30000;
let hasil = "";
for (let i = 1; penduduk <= 100000; i++) {
  penduduk += penduduk * (3 / 100);
  hasil = i + 'Tahun';
}
console.log(hasil);