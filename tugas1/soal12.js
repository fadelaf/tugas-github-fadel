// Soal 12

/*
    Algoritma
    
    1. Cari definisi angka genap
        1.1 Angka genap merupakan angka yang habis dibagi 2 

    2. Buat fungsi bernama showGenap dengan satu buah parameter (k)
        2.1 Parameter k merupakan sebuah integer dalam bentuk string
    
    3. Di dalam fungsi, buat variabel bernama arrAngka

    4. inisiasikan variabel arrAngka dengan parameter k dan lakukan split

    5. Buat variabel temp dan inisiasikan dengan string kosong

    6. lakukan looping sebanyak elemen array arrAngka

    7. Cari nilai tiap elemen array menggunakan looping

    8. Jika nilai elemen habis dibagi 2, tambahkan temp dengan nilai elemen

    9. Setelah looping selesai, return nilai temp
*/

function showGenap(k){

    let arrAngka = k.split('')
    let temp = ''

    for(let i = 0 ; i < arrAngka.length ; i++){
        if( arrAngka[i] % 2 == 0){
            temp += arrAngka[i] + ', '
        }
    }

    return temp

}

console.log(showGenap("23456"))
