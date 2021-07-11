// Soal 14

/*
    Algoritma

    1. Buat fungsi bernama segitiga dengan dua parameter (n, posisi)
        1.1 n merupakan tinggi segitiga
        1.2 posisi merupakan posisi terbentuknya segitiga

    2. Buat variabel deret dan inisiasikan dengan string kosong

    3. Jika posisi adalah "bawah", lakukan looping sebanyak n dengan indeks awal 1
        3.1 Di dalam looping pertama, buat looping kedua sebanyak indeks looping pertama
        3.2 Tambahkan deret dengan '*'

    4. Jika bukan looping tahap terakhir tambahkan deret dengan '\n' untuk membuat baris baru

----------

    5. Jika posisi adalah "atas", buat looping sebanyak n dengan indeks awal 1

    6. Di dalam looping, lakukan dua buah looping
        5.1 Pada looping pertama, lakukan looping sebanyak indeks looping terluar dengan indeks looping awal 1
        5.2 tambahkan deret dengan spasi (' ')
        5.3 Pada looping kedua, lakukan looping yang berjalan mundur sebanyak indeks looping terluar dengan indeks looping awal sebanyak n 
        5.4 tambahkan deret dengan string bintang

    7. Jika bukan looping tahap terakhir tambahkan deret dengan '\n' untuk membuat baris baru
------------

    8. return segitiga

*/

function segitiga(n, posisi){


    let deret = ''

    if(posisi == 'bawah'){

    for(let i = 1 ; i <= n ; i++){
        for(let j = 0 ; j < i ; j++){

            deret += '*'

        }

        if( i !== n ){

                
            deret += '\n'


            }
    }


    }



    else if(posisi == 'atas'){


        for(let i = 1 ; i <= n ; i++){
            
            for(let j = 1 ; j <= i ; j++){

                deret += ' '

            }
            
            for(let k = n ; k >= i ; k--){

                deret += '*'

            }

            if( i !== n ){

                
            deret += '\n'


            }

        }


    }



    return deret



}

console.log(segitiga(5,'atas'))
console.log(segitiga(5,'bawah'))
