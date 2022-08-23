// Membuat list nominal pecahan uang
let pecahanUang = [
  { namaPecahan: 'PENNY', nilai: 0.01 },
  { namaPecahan: 'NICKEL', nilai: 0.05 },
  { namaPecahan: 'DIME', nilai: 0.1 },
  { namaPecahan: 'QUARTER', nilai: 0.25 },
  { namaPecahan: 'ONE', nilai: 1 },
  { namaPecahan: 'FIVE', nilai: 5 },
  { namaPecahan: 'TEN', nilai: 10 },
  { namaPecahan: 'TWENTY', nilai: 20 },
  { namaPecahan: 'ONE HUNDRED', nilai: 100 }
]
// console.log(typeof(curr));

// Membuat fungsi CashRegister
let checkCashRegister = (harga, uangTunai, uangDiLaci) => {
  let output = { status: '', change: [] };
  let kembalian = uangTunai - harga;
  // console.log('Jumlah Kembalian: '+kembalian);

  // Membuat callback function untuk menghitung total uang kembalian yang tersedia di laci uang
  let totalUangKembalian = (totalUang, pecahanDiLaci) => {
    totalUang.nominal += pecahanDiLaci[1];
    totalUang[pecahanDiLaci[0]] = pecahanDiLaci[1];
    return totalUang;
  };

  // Menghitung total uang kembalian yang tersedia
  let uangKembalianTersedia = uangDiLaci.reduce(totalUangKembalian, { nominal: 0 });

  if (uangKembalianTersedia.nominal === kembalian) {
    output.status = 'CLOSED';
    output.change = uangDiLaci;
    return output;
  }
  if (uangKembalianTersedia.nominal < kembalian) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  pecahanUang.reverse();

  // Membuat callback function menghitung kembalian yang akan diberikan
  let hitungKembalian = (uangYangAkanDikembalikan, pecahanKembalian) => {
    let nominalKembalian = 0;
    while (uangKembalianTersedia[pecahanKembalian['namaPecahan']] > 0 && kembalian >= pecahanKembalian['nilai']) {
      // console.log('Hitung Kembalian: '+kembalian+'-'+pecahanKembalian['nilai']);
      kembalian -= pecahanKembalian['nilai'];
      uangKembalianTersedia[pecahanKembalian['namaPecahan']] -= pecahanKembalian['nilai'];
      nominalKembalian += pecahanKembalian['nilai'];
      // console.log('Sisa kembalian: '+kembalian);
      kembalian = Math.round(kembalian*100) / 100;
      // console.log('Sisa kembalian setelah dibulatkan: '+kembalian);
      // console.log('Kembalian yang telah diberikan dengan pecahan '+pecahanKembalian['nilai']+' : '+nominalKembalian);
      // console.log();
    }
    if (nominalKembalian > 0) {
      uangYangAkanDikembalikan.push([pecahanKembalian['namaPecahan'], nominalKembalian])
    }
    return uangYangAkanDikembalikan;
  }
  let kembalian_arr = pecahanUang.reduce(hitungKembalian, []);

  // Jika pecahan kembalain yang tersedia lebih besar dari jumlah kembalian, atau kembaliannya tidak pas karena ada pecahan yang kurang
  if (kembalian_arr.length < 1 || kembalian > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // Jika kembalian tersedia, dan pecahannya sesuai dengan nominal kembalian
  output.status = 'OPEN';
  output.change = kembalian_arr;
  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));