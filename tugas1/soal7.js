// Soal 7

/*

    Algoritma

    1. Buat function bernama deretSatu dengan sebuah parameter (k)
        1.1 k merupakan sebuah angka

    2. Buat variabel bernama satu dengan inisisasi angka 1 dalam bentuk string

    3. Buat variabel bernama deret dan inisiasi dengan string kosong

    3. lakukan looping sebanyak k dengan indeks looping bermula dari  satu

    4. Setiap looping, tambahkan deret dengan variabel satu dan tanda koma, lalu disimpan ke dalam variabel deret

    5. Setiap looping, tambahkan angka 1 dalam bentuk string dengan variabel satu, lalu disimpan ke dalam variabel satu

    5. Setelah looping selesai, return nilai variabel deret

*/


function deretSatu(k){

    let satu = '1'
    let deret = ''
    for(let i = 1 ; i<=k ; i++){

        deret += satu + ', '
        satu += '1'

    }

    return deret

}

console.log(deretSatu(5))
