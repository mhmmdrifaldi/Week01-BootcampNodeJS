function showPrimeNumber(n) {
  const prima = []
  for(let i = 2; i <= n; i++) {
    if(isPrime(i)) {
      prima.push(i)
    }
  }

  let baris = 1;
  let hasil = '';

  for(i = 0; i < prima.length; i++){ 
    if(baris == 5) {
      baris = 1;
      hasil +=  prima[i] + '\n';
    } else {
      hasil += prima[i] + ' ';
      baris++
    }
  }
  return hasil
}

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i == 0) {
      return false
    }
  }
  return true
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */