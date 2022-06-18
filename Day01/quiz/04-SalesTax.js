/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    if (Number(price) && Number(tax)) {
        const total = price + tax;
        return "Total Sales : Rp." + price + "\n" + "Pajak : 0." + tax + "\n" + "Total Harga + Pajak : Rp." + total;
    } else if (!Number(price) && Number(tax)) {
        return "Price harus dalam angka";
    } else if (Number(price) && !Number(tax)) {
        return "Pajak harus dalam angka";
    } else {
        return "Price & Pajak harus dalam angka";
    }
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
