// Soal 15

/*
    Algoritma


    1. Buat fungsi bernama segitiga dengan dua parameter (n, posisi)
        1.1 n merupakan tinggi segitiga
        1.2 posisi merupakan posisi terbentuknya segitiga

    2. Buat variabel deret dan inisiasikan dengan string kosong

    3. Jika posisi adalah "atas", lakukan looping sebanyak n dengan indeks awal 1
        3.1 Di dalam looping terluar, lakukan looping sebanyak indeks looping pertama
        3.2 Indeks looping dimulai dari n hingga 1
        3.3 Setiap looping tambahkan deret dengan '*'

    4.  Pada looping terluar, jika bukan tahap looping terakhir, tambahkan deret dengan '\n' untuk membuat baris baru

    5. Jika posisi adalah "bawah", lakukan looping sebanyak n dengan indeks awal 1
        5.1 Di dalam looping terluar, lakukan dua buah looping
        5.2 Pada looping pertama, inisiasi looping dengan n dikurangi 1 
        5.3 lakukan looping sebanyak indeks looping terluar
        5.4 Tambahkan deret dengan spasi (' ')
        5.5 Pada looping kedua, inisiasi looping dengan indeks awal 1
        5.6 Lakukan looping sebanyak indeks looping terluar
        5.7 tambahkan deret dengan string bintang '*'


    6. Pada looping terluar, jika bukan tahap looping terakhir, tambahkan deret dengan '\n' untuk membuat baris baru


    7.return nilai deret

*/


function segitiga(n, posisi){

    let deret = ''
    
    if( posisi == "atas"){


        for(let i = 1 ; i <= n ; i++){
            for(let j = n ; j >= i ; j--){

                
              deret += '*'
        

            }

            if( i !== n){

                deret += '\n'

            }

        }

    }

    else if( posisi == 'bawah'){

    for(let i = 1 ; i <= n ; i++){
        
        for(let j = n-1 ; j >= i ; j--){

                
            deret += ' '
        

        }

        for(let k = 1 ; k <= i ; k++ ){

            deret += '*'
        }

        
        if( i !== n){

            deret += '\n'

        }

    }

    }

    return deret
}

console.log(segitiga(5, "atas"))
console.log(segitiga(5, "bawah"))