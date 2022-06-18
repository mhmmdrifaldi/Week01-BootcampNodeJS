/** Display year is kabisat and display month */

function getDays(month, year) {
    if (Number(month) && Number(year)) {
        if (year % 4 == 0) {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    value = "This month has 31 days, " + year + " adalah tahun kabisat";
                    break;

                case 4:
                case 6:
                case 9:
                case 11:
                    value = "This month has 30 days, " + year + " adalah tahun kabisat";
                    break;

                case 2:
                    value = "This month has 29 days, " + year + " adalah tahun kabisat";
                    break;

                default:
                    break;
            }
            return value;
        } else {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    value = "This month has 31 hari";
                    break;

                case 4:
                case 6:
                case 9:
                case 11:
                    value = "This month has 30 hari";
                    break;

                case 2:
                    value = "This month has 29 hari";
                    break;

                default:
                    break;
            }
            return value;
        }
    } else if (!Number(month) && Number(year)) {
        return "inputan bulan harus dalam integer";
    } else if (Number(month) && !Number(year)) {
        return "inputan tahun harus dalam integer";
    } else {
        return "inputan bulan & tahun harus dalam integer";
    }
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
