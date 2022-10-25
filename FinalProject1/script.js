const btnSubmit = document.querySelector(".simpan");
const btnBack = document.querySelector(".kembali");
const namaPengirim = document.querySelector("#namaPengirim");
const nomorPengirim = document.querySelector("#nomorPengirim");
const alamatPengirim = document.querySelector("#alamatPengirim");
const posPengirim = document.querySelector("#posPengirim");
const namaPenerima = document.querySelector("#namaPenerima");
const nomorPenerima = document.querySelector("#nomorPenerima");
const alamatPenerima = document.querySelector("#alamatPenerima");
const posPenerima = document.querySelector("#posPenerima");
const namaBarang = document.querySelector("#namaBarang");
const jumlahBarang = document.querySelector("#jumlahBarang");
const beratBarang = document.querySelector("#beratBarang");
const layanan = document.querySelector("#layanan");
const globalArray = [];

btnBack.addEventListener("click", function (event){
    location.href='index.html';
});

btnSubmit.addEventListener("click", function (event) {
    const random = Math.floor(100000000000000 + Math.random() * 90000000000000);
    const myObject = {
        namaPengirim : namaPengirim.value,
        nomorPengirim : nomorPengirim.value,
        alamatPengirim : alamatPengirim.value,
        posPengirim : posPengirim.value,
        namaPenerima : namaPenerima.value,
        nomorPenerima : nomorPenerima.value,
        alamatPenerima : alamatPenerima.value,
        posPenerima : posPenerima.value,
        namaBarang : namaBarang.value,
        jumlahBarang : jumlahBarang.value,
        beratBarang : beratBarang.value,
        layanan : layanan.value,
        resi : random
    }
    globalArray.push(myObject);
    console.log(globalArray);
    window.localStorage.setItem("data", JSON.stringify(globalArray));
    Swal.fire({
        icon: 'success',
        title: 'Resi anda: ' + random,
        showConfirmButton: false,
        timer: 2000
    })
});



function getData(){
    let resi = localStorage.getItem("resi");
    // if (resi) {
        let newObject = JSON.parse(window.localStorage.getItem("data"));
        console.log(Object.values(newObject))
        document.getElementById("contoh").innerText = newObject[0].namaPengirim
    // } else {
    //     document.getElementById("contoh").innerText = 'Resi Kosong'
    // }
}