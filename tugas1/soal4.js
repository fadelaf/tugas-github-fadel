// Soal 4

/*

    Algoritma

    1. Buat function bernama howManyWord dengan satu parameter (s)
        1. s merupakan sebuah string

    2. Buat variabel bernama jumlahKata di dalam function dan inisiasi dengan angka 0

    3. Jika indeks pertama adalah spasi, kembalikan nilai dengan informasi untuk mengisi angka dengan benar

    4. lakukan looping sebanyak karakter s dengen indeks looping dimulai dari 0

    5. Jika suatu indeks adalah spasi, maka tambahkan jumlahKata dengan 1

    6. Di luar looping Jika indeks terakhir bukanlah spasi, tambahkan jumlahKata dengan 1

    7. return nilai jumlahKata
    
*/

function howManyWord(s){



    let jumlahKata = 0 

    if(s[0] == ' '){
        jumlahKata = 'Masukkan kalimat dengan benar'
        return jumlahKata
    }

    for(let i = 0 ; i < s.length ; i++){

        if(s[i] == ' '){
            jumlahKata += 1
        }

    }


    if(s[s.length-1] !== ' '){

        jumlahKata += 1

    }

    return jumlahKata

}

console.log(howManyWord("aku suka javascript fullstack"))
console.log(howManyWord("fullstack"))
