// Soal 6

/*

    Algoritma

    1. Buat fungsi bernama deretRam dengan satu buah parameter (k)
        1.1 k merupakan sebuah angka

    2. Buat variabel bernama byte di dalam function dan inisiasi dengan nilai 1 

    3. Buat variabel bernama deret di dalam function dan inisiasi dengan nilai string kosong

    3. lakukan looping hingga sebanyak k, dengan indeks looping pertama adalah 0

    4. setiap looping, variabel deret ditambahkan dengan nilai byte dan tanda koma lalu disimpan ke dalam variabel deret

    5. setiap looping, byte dikalikan dengan dua

    6. Setelah selesai looping, return nilai deret

*/

function deretRam(k){

    let byte = 1 
    let deret = ''

    for(let i = 0; i <= k ; i++){

        deret += byte + ','
        byte *= 2

    }

    return deret

}

console.log(deretRam(7))
