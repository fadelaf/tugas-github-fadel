// Soal 11

/* 
    Algoritma

    1. Buat variabel  a dan inisiasikan dengan angka
    2. Buat variabel  b dan inisiasikan dengan angka
    3. Buat function bernama swap dengan dua parameter
    4. buat array yang diisikan dengan dua parameter sebagai variabel
    5. ubah nilai array yang telah dibuat dengan diisikan array dengan dua parameter yang telah dibalik nilainya.
    6. return informasi mengenai sebelum ditukar dan setelah dituker menggunakan template literal


*/

let a = 9;
let b = 5;

function swap(a,b){


    [a,b] = [b,a]

return `Before swap => a = ${b} b = ${a}
After swap => a = ${a} b = ${b}`

}
console.log(swap(a,b))