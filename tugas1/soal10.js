// Soal 10

/*

    Algoritma

    1. Cari definisi Palindrome
    
    2. Buat fungsi bernama isPalindrome dengan parameter s
        2.1 s merupakan string

    3. Buat variabel bernama sentence1 dengan inisiasi nilai paramater s

    4. Buat variabel bernama sentence2 dengan inisiasi string kosong

    5. lakukan looping sebanyak karakter sentence1

    6. inisiasi indeks looping awal dengan nilai sebanyak karakter sentence1 dikurangi 1

    7. Lakukan step looping secara mundur hingga indeks ke 0

    8. Cari setiap indeks sentence1 dan tambahkan tiap karakter ke sentence2

    9. Jika sentence2 sama dengan sentence1, return nilai true


*/

function isPalindrome(s){


    let sentence1 = s
    let sentence2 = ''

    for( let i = sentence1.length-1 ; i >= 0 ; i--){
        sentence2 += sentence1[i]
    }

    if(sentence2 == sentence1){
        return true
    }
    else{
        return false
    }

}

console.log(isPalindrome('kasur ini rusak'))
