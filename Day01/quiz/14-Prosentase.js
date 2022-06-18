/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
  if(Number(start, end)) {
    if(start < end) {
      const hasil = ((end - start) / start) * 100;
        return 'Total kenaikan income ' + hasil + '%'
    } else {
      const hasil = ((end - start) / start) * 100;
        return 'Total kenaikan income ' + Math.floor(hasil) + '%'
    }
  } else {
    return start + ' or ' + end + ' harus dalam angka'
  }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


