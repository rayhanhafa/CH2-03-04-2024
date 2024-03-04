//input nama
var nama = prompt("Siapa Namamu?\n")

//input keinginan student
var studentWish = prompt("Masuk Universitas ga?\n")

//jika kenginnan student "mau"
if (studentWish == "mau") {
    //input nilai
    var nilai = prompt("Berapa Nilai akhir SMA/SMKmu?\n")

    //perhitungan random chance masuk univ
    var chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv)

    //jika nilai kurang dari 30
    if (nilai < 30) {
        alert("tidak mungkin masuk univ")
    }

    //jika nilai kurang dari 50
    else if (nilai < 50) {
        //jika kesempatan masuk univ kurang dari 50
        if (chanceGetUniv < 50) {
            alert("hmm kemungkinan " + nama + " kecil masuk UNIV")
        }

        //jika kesempatan masuk univ lebih dari 50
        else if (chanceGetUniv > 50) {
            alert("hmm kemungkinan " + nama + " bisa masuk univ")
        }
    }

    //jika nilai lebih dari 60
    else if (nilai > 60) {
        alert("hei " + nama + " pasti masuk univ dengan nilai " + nilai + " mu yang besar itu")
    }
    else if (chanceGetUniv > 70 && nilai > 60) {
        alert("hei " + nama + " pasti masuk univ dengan nilai " + nilai + " mu yang besar itu")
    }

    //jika nilai lebih dari 80
    else if (nilai > 80) {
        alert("hei " + nama + " pasti masuk univ dengan nilai " + nilai + " mu yang sangat besar itu")
    }
    else if (chanceGetUniv > 70 && nilai > 80) {
        alert("hei " + nama + " pasti masuk univ dengan nilai " + nilai + " mu yang sangat besar itu")
    }

}
//jika keinginan student selain "mau"
else {
    alert("shappp bang")
}

// var myName = "rayhan";
// var userInput = prompt('siapa namamu?');
// alert('Nama saya  ${userInput}');
// alert("Nama saya " + userInput + " dan " + myName)

// var nama ="syifa"
// nama = "qonita"
// nama = "nadilla"
// alert (nama)

// function myMbobil(userInput) {
//     if (userInput = "rayhan") {
//         var mobil = "hrv"
//         alert(mobil)
//     }
//     else{
//         var mobil = "innova"
//         alert(mobil)
//     }
// }

// myMbobil()

// var n = Math.random()
// n = n * 6
// n = Math.floor(n)
// alert(n)



//promt berapa nilai sma namam
//jika nilai diatas 80
//kemungkinan diatas 80%

// var x = 70
// var y = 100
// var a = "cek"
// var b = "cek"
// console.log (x > y)
// console.log(a === b)
// console.log(a != b)
