//soal 15
/**
Buat function untuk membayar cicilan angsuran rumah,
diketahui angsuran rumah per bulan Rp.3.500.000,
  
function payment(tglBayar,tglJatuhTempo,cicilan);

jika penghuni telat membayar dari tgl jatuh tempo 
akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
*/

function payment(tglBayar,tglJatuhTempo,cicilan){
	const tanggalBayar = new Date(tglBayar)
	const jatuhTempo = new Date(tglJatuhTempo)

	const payDate = new Intl.DateTimeFormat('id-ID').format(tanggalBayar)
	const dueDate = new Intl.DateTimeFormat('id-ID').format(jatuhTempo)
	const angsuran = (jatuhTempo.getMonth()+1) + ', ' + jatuhTempo.getFullYear()
	const terlambat = differenceInDays(tglBayar, tglJatuhTempo)
	
	let denda = 0
	if(terlambat < 0) {
		denda = cicilan * ((Math.abs(terlambat) * 2) / 1000)
	}

	if(cicilan >= 3500000) {
		if(terlambat <= 5) {
			return showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda)
		} else {
			return 'Tagihan bulan ' + (jatuhTempo.getMonth()+1) + ' belum tersedia'
		}
	} else {
		return 'Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran'
	}
} 
		
function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){
	const telat = Math.abs(terlambat)
	const total = cicilan + denda

	const tagihan = '--------------------------' + '\n' +
									'Tanggal Bayar = ' + payDate + '\n' +
									'Jatuh Tempo = ' + dueDate + '\n' +
									'--------------------------' + '\n' +
									'Tagihan Bulan ' + angsuran + ' = Rp.' + cicilan + '\n' +
									'Denda = Rp.' + denda + ' (terlambat ' + telat + ' hari)' + '\n' +
									'Total = Rp.' + total + ' (lunas)' + '\n' +
									'--------------------------' + '\n' +
									'Kwitansi ini sebagai alat bukti pembayaran'

	return tagihan
}
		
function differenceInDays(startDate,endDate){
	const tanggalBayar = new Date(startDate)
	const tanggalTempo = new Date(endDate)

	const bayarMiliDetik = tanggalBayar.getTime()
	const tempoMiliDetik = tanggalTempo.getTime()

	const selisihMiliDetik = tempoMiliDetik - bayarMiliDetik
	const selisihDetik = selisihMiliDetik / 1000
	const selisihMenit = selisihDetik / 60
	const selisihJam = selisihMenit / 60
	const selisihHari = selisihJam / 24

	return selisihHari
}
		
console.log(payment("09/30/2021","09/27/2021",50000) + '\n');//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021","09/27/2021",3500000) + '\n');//Tagihan bulan 9 belum tersedia
console.log(payment("09/27/2021","09/27/2021",3500000) + '\n');
/**
--------------------------
Tanggal Bayar : 27/9/2021
Jatuh Tempo :  27/9/2021
--------------------------
Tagihan bulan 9,2021 = Rp.3500000 
Denda = Rp.0 (terlambat 0 hari)
Total = Rp.3500000 (lunas)
--------------------------
Kwitansi ini sebagai alat bukti pembayaran
*/