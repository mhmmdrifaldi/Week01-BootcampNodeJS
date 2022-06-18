/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if(type == 'yen') {
		const convert = money * 130.12;
		return money + ' ' + type + ' = ' + Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(Math.round(convert))
	} else if (type == 'usd') {
		const convert = money * 14382.5;
		return money + ' ' + type + ' = ' + Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(Math.round(convert))
	} else if (type == 'euro') {
		const convert = money * 16000;
		return money + ' ' + type + ' = ' + Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(Math.round(convert))
	} else {
		return 'no match type currency'
	}
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency