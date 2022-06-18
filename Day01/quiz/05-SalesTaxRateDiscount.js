/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
    if (Number(price) && Number(tax) && Number(discount)) {
        const potongan = (price * discount) / 100;
        const hasilPotongan = price - potongan;
        const pajak = (hasilPotongan * tax) / 100;
        const hasil = hasilPotongan + pajak;
        return (
            "Total Sales \t : Rp." +
            price +
            "\n" +
            "Discount (" +
            discount +
            ") \t : Rp " +
            potongan +
            "\n" +
            "PriceAfterDiscount  : Rp." +
            hasilPotongan +
            "\n" +
            "Pajak (" +
            tax +
            ") \t : Rp." +
            pajak +
            "\n" +
            "------------------------------" +
            "\n" +
            "TotalPayment \t : Rp." +
            hasil
        );
    } else if (!Number(price) && Number(tax) && Number(discount)) {
        return "Price harus dalam angka";
    } else if (Number(price) && !Number(tax) && Number(discount)) {
        return "Pajak harus dalam angka";
    } else if (Number(price) && Number(tax) && !Number(discount)) {
        return "Discount harus dalam angka";
    } else {
        return "Price, Tax & Discount harus dalam angka";
    }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angka
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
