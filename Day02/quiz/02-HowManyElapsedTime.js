/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let total = 0;

  for (year1; year1 < year2; year1++) {
    total += isKabisat(year1);
  }

  return total
}

function isKabisat(year) {
  if (year % 4 == 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(howManyKabisat(1997, 2021));
