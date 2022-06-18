//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas
const deret = [12];
for (let i = 0; i < 4; i++) {
  const hasil = deret[i] + 12;
  deret.push(hasil);
}
console.log(deret.join(", "));