// Soal 13

/*
    Algoritma

    1. Buat fungsi bernama maxWordLength dengan sebuah parameter (x)
        1.1 parameter x merupakan sebuah input string

    2. Buat variabel bernama arr

    3. Inisiasikan variabel arr dengan parameter yang displit setiap spasi

    4. buat variabel bernama elementLength

    5. inisiasikan elementLength dengan panjang element dari indeks pertama arr

    6. buat variabel bernama elementString

    7. inisiasikan elementString dengan element dari indeks pertama arr 

    6. lakukan looping dan dapatkan tiap-tiap elemen arr mulai dari indeks 1

    8. Jika panjang elemen lebih besar dari nilai panjang elemen sebelumnya, ubah elementLength dengan panjang elemen saat itu dan elementString dengan element saat itu

    9. Setelah looping selesai, return nilai elementString

*/

function maxWordLength(x){

    let arr = x.split(' ')
    let elementLength = arr[0].length
    let elementString = arr[0]

    for(let i = 1 ; i < arr.length ; i++){

        if(arr[i].length > arr[i-1].length){
            elementLength = arr[i].length
            elementString = arr[i]
        }

    }

    return elementString

}

console.log(maxWordLength("aku suka bootcamp sentul city"))