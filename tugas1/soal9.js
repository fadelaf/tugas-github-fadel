// Soal 9

/*

    Algoritma

    1. Buat fungsi bernama randomPosition dengan 1 parameter (k)
        1.1 k merupakan angka 0 hingga 9
    
    2. Buat variabel bernama n dan insiasikan dengan k
    
    2. Buat variabel bernama temp dan inisiasikan dengan string kosong

    3. Buat variabel bernama kString

    4. Inisiasi variabel kString dengan nilai num yang diubah ke dalam string

    5. lakukan looping sebanyak 900 kali dengan posisi indeks looping awal di 100

    6. buat variabel nString

    7. Inisiasi variabel nString dengan indeks looping yang diubah ke dalam string

    8. buat variabel flag dan inisiasi dengan nilai 0

    8. Di dalam looping, lakukan looping sebanyak karakter nString untuk mencari nilai setiap indeks nString

    9. Jika kString equal dengan karakter nString, tambahkan 
    1 pada flag
    
    10. Jika flag sama dengan 1, tambah kan temp dengan nString dan tanda koma

    11. Setelah looping selesai, return nilai temp



*/


function randomPosition(k){

    let num = k
    let temp = ''
    let kString = num.toString()


    for( let i = 100 ; i <= 900 ; i++){
        let nString = i.toString()
        let flag = 0

        for( let j = 0 ; j < nString.toString() ; j++){
            
            if( kString == nString[j]){
                flag += 1
                if(flag == 1){
                    temp += nString + ', '
                }
            }
        }
    }

    return temp
}

console.log(randomPosition(9))
