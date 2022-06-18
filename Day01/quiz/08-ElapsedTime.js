/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
    if (Number(seconds)) {
        const rumusHari = seconds % 86400;
        const hari = (seconds - rumusHari) / 86400;
        const rumusJam = rumusHari % 3600;
        const jam = (rumusHari - rumusJam) / 3600;
        const rumusMenit = rumusJam % 60;
        const menit = (rumusJam - rumusMenit) / 60;
        const detik = rumusMenit;

        return hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik";
    } else {
        return seconds + " is not number";
    }
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
