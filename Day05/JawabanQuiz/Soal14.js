//soal 14
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
	const tanggal1 = tglPinjam.split("-").join('')
	const tanggal2 = tglKembali.split("-").join('')

	const pinjam = new Date(tglPinjam)
	const kembali = new Date(tglKembali)

	const pinjamMiliDetik = pinjam.getTime()
	const kembaliMiliDetik = kembali.getTime()

	const selisihMiliDetik = kembaliMiliDetik - pinjamMiliDetik
	const selisihDetik = selisihMiliDetik / 1000
	const selisihMenit = selisihDetik / 60
	const selisihJam = selisihMenit / 60
	const selisihHari = selisihJam / 24

	let denda = 0
	if(selisihHari > 6) {
		denda = 500 * (totalkomik * (selisihHari - 6))
	}

	const biayaHarian = 2000
	const biayaPerKomik = totalkomik * biayaHarian
	const tagihan = (biayaPerKomik * selisihHari) + denda
	
	if(Number(tanggal1) && Number(tanggal2)) {
		return 'Total Hari = ' + selisihHari + '\n' +
					 'Total Komik = ' + totalkomik + ' x ' + biayaHarian + '\n' +
					 '-----------------------' + '\n' +
					 'Total Tagihan = Rp.' + tagihan
	} else if (!Number(tanggal1) && Number(tanggal2)) {
		return `Tgl.Pinjam ${tglPinjam} not valid formated date`
 	} else if (Number(tanggal1) && !Number(tanggal2)) {
	 return `Tgl.Kembali ${tglKembali} not valid formated date`
	} else {
	 return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date` 
 	}
}

console.log(tagihanKomik("09-03-20bb", "09-06-2021",4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));//Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));//Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */