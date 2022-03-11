// No.1
const changeWord = (selectedtext,changedtext,text) => {
  return text.replace(selectedtext,changedtext);}
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'
console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo', 'semeru', kalimat2))


// No.2
const checkTypeNumber = (givenNumber) =>{
  if (typeof givenNumber == 'string'){return 'Error : Invalid data type'}
  if (typeof givenNumber == 'object'){return 'Error : Invalid data type'}
  if (givenNumber % 2 == 0){return 'GENAP'}
  if (givenNumber % 2 == 1){return 'GANJIL'}
  return 'Error : Bro where is the parameter ?'}
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())


// no.3
const checkEmail = (email) => {
  if(typeof email == 'number'){
    return 'ERROR : Format salah (Bukan number)'
  }
  if (email == null){
    return 'ERROR : format kosong (Tidak ada parameter)'
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return 'VALID'
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/.test(email)){
    return 'INVALID'
  }
  if (/^[a-zA-Z]+$/.test(email)){
    return 'ERROR : Harap masukkan email lengkap (" @ ")'
  }
}
console.log(checkEmail('rega@gmail.com'))
console.log(checkEmail('rega@gmail.co.id'))
console.log(checkEmail('rega@gmail'))
console.log(checkEmail('rega'))
console.log(checkEmail(3322))
console.log(checkEmail())


// no.4
const isValidPassword = (pw) => {
  if (pw == null){
    return 'ERROR : Format kosong (Tidak ada Parameter)'}
  if (typeof pw == 'number'){
    return 'ERROR : format salah (Bukan number)'}
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pw)){
    return 'true'}
    return 'false'}
console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())


// no.5
const getSplitName = (personName) =>{
  if(typeof personName == 'number'){return 'format salah (bukan number)'}
  const name = personName.split(' ')
  const lengthName = name.length
  switch(lengthName){
    case 1:
      return {
       firstName: name[0],
       middleName: null,
       lastName: null,
      }
    case 2:
      return {
        firstName: name[0],
        middleName: null,
        lastName: name[1],
      }
    case 3:
      return {
        firstName : name[0],
        middleName : name[1],
        lastName : name[2],
      }
    default :
      return 'This function is only for 3 characters name'
  }
}
console.log(getSplitName('Rega Andhika Kusuma'))
console.log(getSplitName('Rega Andhika'))
console.log(getSplitName('Rega'))
console.log(getSplitName('Rega Andhika Kusuma Lagi'))
console.log(getSplitName(0))


// no.6
const getAngkaTerbesarKedua = (data) =>  {
  if (data == null){
    return 'ERROR : Format salah (Kosong)'
  }
  if(typeof data == "number"){
    return 'ERROR : Format yang dimasukkan salah (Bukan Number)'
  }
  if (data){
    dataAngka.sort(function(x,y){
      return y-x;
    });
    for (var j = 1; j < dataAngka.length; j++){
      if( dataAngka[j-1] !== dataAngka[j]){
        return dataAngka [j]
      }
    }
  }
}
const dataAngka = [9,4,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())


// no.7
const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori : "Sepatu Sport",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High ',
    kategori : "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  }
]
const hitungTotalPenjualan = (dataPenjualan) => {
dataPenjualan = dataPenjualanPakAldi.map(function(obj){
  return obj.totalTerjual;
})
  return dataPenjualan.reduce((a,b) => a + b, 0);
}
console.log(hitungTotalPenjualan(dataPenjualanPakAldi))

// no.8
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {

      const totalKeuntungan = dataPenjualan.reduce(
        (acc, { totalTerjual, hargaJual, hargaBeli  }) => {acc += (totalTerjual) * (hargaJual - hargaBeli) ;
          return acc;},0);

      const totalModal = dataPenjualan.reduce(
        (acc, {totalTerjual, sisaStok, hargaBeli}) => {acc += (sisaStok + totalTerjual) * hargaBeli;
        return acc;},0); 

      const persentaseKeuntungan = totalKeuntungan / totalModal * 100;

      const bukuTerlaris = dataPenjualan.reduce(
        (prev,curr) => curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.namaProduk
      )
      
      const penulisTerlaris = dataPenjualan.reduce(
        (prev,curr) =>( curr.totalTerjual > (prev.totalTerjual||0) ? curr : prev.penulis)) 

      return `totalKeuntungan : 'Rp. ${new Intl.NumberFormat('id-ID').format(Math.floor(totalKeuntungan))}'\ntotalModal : 'Rp. ${new Intl.NumberFormat('id-ID').format(Math.floor(totalModal))}'\npersentaseKeutungan : '${(persentaseKeuntungan).toFixed(2)} %'\nbukuTerlaris : '${bukuTerlaris}'\npenulisTerlaris : '${penulisTerlaris}'`
}
console.log(getInfoPenjualan(dataPenjualanNovel))