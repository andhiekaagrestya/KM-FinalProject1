const form = document.querySelector(".formulir");
const btnSubmit = document.querySelector(".simpan");
const btnBack = document.querySelector(".kembali");
const btnTrack = document.querySelector("#btn-track");
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

btnBack.addEventListener("click", function (event) {
    location.href = 'index.html';
});

btnSubmit.addEventListener("click", function (event) {
    const random = Math.floor(100000000000000 + Math.random() * 90000000000000);
    const myObject = {
        namaPengirim: namaPengirim.value,
        nomorPengirim: nomorPengirim.value,
        alamatPengirim: alamatPengirim.value,
        posPengirim: posPengirim.value,
        namaPenerima: namaPenerima.value,
        nomorPenerima: nomorPenerima.value,
        alamatPenerima: alamatPenerima.value,
        posPenerima: posPenerima.value,
        namaBarang: namaBarang.value,
        jumlahBarang: jumlahBarang.value,
        beratBarang: beratBarang.value,
        layanan: layanan.value,
        resi: random
    }
    globalArray.push(myObject);
    console.log(globalArray);
    window.localStorage.setItem("data", JSON.stringify(globalArray));
    Swal.fire({
        icon: 'success',
        title: 'Terima Kasih Sudah Menggunakan Jasa Kami',
        text: 'Resi anda: ' + random,
        showConfirmButton: false,
        timer: 3500
    })
    namaPengirim.value = '';
    nomorPengirim.value = '';
    alamatPengirim.value = '';
    posPengirim.value = '';
    namaPenerima.value = '';
    nomorPenerima.value = '';
    alamatPenerima.value = '';
    posPenerima.value = '';
    namaBarang.value = '';
    jumlahBarang.value = '';
    beratBarang.value = '';
    layanan.value = '';
});

function getData() {
    let x = document.getElementById('section-name')
    let newObject = JSON.parse(window.localStorage.getItem("data"));
    let formResi = document.querySelector("#form-resi");
    let resi,sender,noSender,addSender,posSender,receiver,noReceiver,
        addReceiver,posReceiver,thing,total,weight,service,i = 0
    let cekResi = newObject.filter(function (newObject) {
        return newObject.resi == formResi.value;
    });
    if (x.style.display == 'none' && cekResi.length) {
        console.log(cekResi)
        console.log(cekResi[0].resi)
        resi = cekResi[0].resi;
        sender = cekResi[0].namaPengirim
        noSender = cekResi[0].nomorPengirim
        addSender = cekResi[0].alamatPengirim
        posSender = cekResi[0].posPengirim
        receiver = cekResi[0].namaPenerima
        noReceiver = cekResi[0].nomorPenerima
        addReceiver = cekResi[0].alamatPenerima
        posReceiver = cekResi[0].posPenerima
        thing = cekResi[0].namaBarang
        total = cekResi[0].jumlahBarang
        weight = cekResi[0].beratBarang
        service = cekResi[0].layanan
        if (cekResi) {
            x.style.display = 'block';
            document.getElementById("noresi").innerText = resi
            document.getElementById("senderName").innerText = sender
            document.getElementById("senderNumber").innerText = noSender
            document.getElementById("senderAddress").innerText = addSender
            document.getElementById("thingsName").innerText = thing
            document.getElementById("weight").innerText = weight
            document.getElementById("total").innerText = total
            document.getElementById("receiverName").innerText = receiver
            document.getElementById("receiverNumber").innerText = noReceiver
            document.getElementById("receiverAddress").innerText = addReceiver
            document.getElementById("service").innerText = service
        } else {
            x.style.display = 'none';
            Swal.fire({
                icon: 'error', 
                title: 'Oops...', 
                text: 'Something went wrong!', 
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }else{
        console.log(cekResi)
        if(cekResi.length){
            console.log(cekResi)
            resi = cekResi[0].resi;
            sender = cekResi[0].namaPengirim
            noSender = cekResi[0].nomorPengirim
            addSender = cekResi[0].alamatPengirim
            posSender = cekResi[0].posPengirim
            receiver = cekResi[0].namaPenerima
            noReceiver = cekResi[0].nomorPenerima
            addReceiver = cekResi[0].alamatPenerima
            posReceiver = cekResi[0].posPenerima
            thing = cekResi[0].namaBarang
            total = cekResi[0].jumlahBarang
            weight = cekResi[0].beratBarang
            service = cekResi[0].layanan
            if (cekResi) {
                x.style.display = 'block';
                document.getElementById("noresi").innerText = resi
                document.getElementById("senderName").innerText = sender
                document.getElementById("senderNumber").innerText = noSender
                document.getElementById("senderAddress").innerText = addSender
                document.getElementById("thingsName").innerText = thing
                document.getElementById("weight").innerText = weight
                document.getElementById("total").innerText = total
                document.getElementById("receiverName").innerText = receiver
                document.getElementById("receiverNumber").innerText = noReceiver
                document.getElementById("receiverAddress").innerText = addReceiver
                document.getElementById("service").innerText = service
            }else {
                x.style.display = 'none';
                Swal.fire({
                    icon: 'error', 
                    title: 'Oops...', 
                    text: 'Something went wrong!', 
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        } else  {
            x.style.display = 'none';
            Swal.fire({
                icon: 'error', 
                title: 'Oops...', 
                text: 'Something went wrong!', 
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
}

