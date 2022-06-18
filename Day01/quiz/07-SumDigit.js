/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
    if (Number(n)) {
        if (n < 10000) {
            //return String(n).split('').reduce((a, b) => {return a + Number(b);}, 0);

            const arr = ("" + n).split("");
            let total = 0;
            for (i = 0; i < arr.length; i++) {
                total = total + Number(arr[i]);
            }
            return total;
        } else {
            return n + " harus lebih kecil dari 10000";
        }
    } else {
        return n + " is not number, try again...";
    }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
