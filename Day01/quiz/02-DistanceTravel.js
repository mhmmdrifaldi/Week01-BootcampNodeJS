/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t), 
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t){
  if(Number(a,t)) {
    if(a >= 0 && t >= 0) {
      const jarak = (0.5 * a) * (Math.pow(t, 2));
      return 'Jarak yang ditempuh adalah ' + jarak + ' meter/s'
    } else {
      return 'Acceleration or time must be >= 0'
    } 
  } else {
    return 'input must an number'
  }
}

console.log(calculateDistance("a","t"));//input must an number
console.log(calculateDistance(-1,9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50,60)); //Jarak yang ditempuh adalah 90000 meter/s
