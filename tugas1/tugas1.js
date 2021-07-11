// 1

/*

Algoritma

1. Buat sebuah fungsi yang bernama "sum" yang memiliki 1 parameter
2. Membuat empat variabel
    2.1 buat variabel d1 untuk menampung digit pertama
    2.2 buat variabel d2 untuk menampung digit kedua
    2.3 buat variabel d3 untuk menampung digit ketiga
    2.4 buat variabel d4 untuk menampung digit keempat
3. Dapatkan tiap-tiap digit angka lalu masukan ke variabel yang telah dibuat
    3.1 Dapatkan digit pertama dengan mencari sisa hasil bagi antara parameter dengan angka 10 dan masukan ke variabel d1

    3.2 Dapatkan sisa hasil bagi antara parameter dengan angka 100 dan masukan ke variabel d2

    3.3 Dapatkan sisa hasil bagi antara parameter dengan angka 1000
    dan masukan ke variabel d3

    3.4 Dapatkan digit ke empat dengan mengurangi parameter dengan variabel d3 lalu dibagi dengan 1000

    3.5 Kurangi variabel d3 dengan d2 lalu bagi dengan 100
    
    3.6 Kurangi variabel d2 dengan d1 lalu bagi dengan 10

4. tambahkan antara variabelnya (d1,d2,d3,d4)

5. return valuenya


*/


function sum(n){

    let d1 = n % 10
    let d2 = n % 100
    let d3 = n % 1000
    let d4 = (n-d3)/1000
    d3 = (d3 - d2) / 100
    d2 = (d2 - d1) / 10

    return d1+d2+d3+d4

}

console.log(sum(3456))



// 2. 
/*
    Algoritma

    1. Deklarasikan function yang bernama "reverse" dengan satu    buah parameter

    2. Di dalam function, buat empat variabel dengan namanya d1,d2,d3,d4

    3. Dapatkan tiap-tiap digit angka lalu masukan ke variabel yang telah dibuat

    3.1 Dapatkan digit pertama dengan mencari sisa hasil bagi antara parameter dengan angka 10 dan masukan ke variabel d1

    3.2 Dapatkan sisa hasil bagi antara parameter dengan angka 100 dan masukan ke variabel d2

    3.3 Dapatkan sisa hasil bagi antara parameter dengan angka 1000
    dan masukan ke variabel d3

    3.4 Dapatkan digit ke empat dengan mengurangi parameter dengan variabel d3 lalu dibagi dengan 1000

    3.5 Kurangi variabel d3 dengan d2 lalu bagi dengan 100
    
    3.6 Kurangi variabel d2 dengan d1 lalu bagi dengan 10

4.  kalikan d1 dengan 1000
5.  kalikan d2 dengan 100
6.  kalikan d3 dengan 10
7. Jumlahkan semua variabel
8. return value hasil penjumlahan


*/


function reverse(n){

    let d1 = n % 10
    let d2 = n % 100
    let d3 = n % 1000
    let d4 = (n-d3)/1000
    d3 = (d3 - d2) / 100
    d2 = (d2 - d1) / 10

    d1 *= 1000
    d2 *= 100
    d3 *= 10

    return d1+d2+d3+d4

}
console.log(reverse(1234))


// soal 3
/*

    Algoritma

    1. Buat function dengan nama howManyFrogJump dengan 3 parameter x,y,k.
        1.1 x memiliki definisi sebagai posisi awal
        1.2 y memiliki definisi sebagai target posisi
        1.3 k memiliki definisi sebagai jarak tempuh satu kali lompatan
    
    2. Buat variabel sisaJarak di dalam function

    3. Buat variabel jumlahLompatan di dalam function
    
    3. cari sisa jarak dengan parameter y dikurangi oleh parameter x lalu masukan ke dalam variabel sisaJarak

    4. bagikan nilai sisaJarak dengan parameter k lalu masukan ke dalam variabel jumlahLompatan
    
    5. Lakukan pembulatan nilai jumlahLompatan ke atas

    6. return nilai jumlahLompatan



*/

function howManyFrogJump(x,y,k){

    let sisaJarak;
    let jumlahLompatan;

    sisaJarak = y - x
    jumlahLompatan = sisaJarak / k
    jumlahLompatan = Math.ceil(jumlahLompatan)

    return jumlahLompatan

}

console.log(howManyFrogJump(10,85,30))


// Soal 4

/*

    Algoritma

    1. Buat function bernama howManyWord dengan satu parameter (s)
        1. s merupakan sebuah string
    
    2. Buat variabel bernama hitungKata di dalam function dan inisiasi dengan angka 0

    3. Buat variabel bernama jumlahKata di dalam function dan inisiasi dengan angka 0

    4. Lakukan looping sebanyak karakter s dengen indeks looping dimulai dari 0

    5. Jika indeks 0 adalah spasi atau suatu indeks adalah spasi dan indeks selanjutnya adalah spasi, atau indeks teralhir adalah spasi beri tahu untuk memasukan kalimat dengan benar

    6. Jika suatu indeks adalah spasi, maka tambahkan jumlahKata dengan 1

    7. Jika indeks terakhir bukanlah spasi, tambahkan jumlahKata dengan 1
    
*/

function howManyWord(s){

    let jumlahKata = 0 ;
    
    for(let i = 0 ; i < s.length ; i++){

        if(s[0] === ' ' || s[-1] === ' ' || (s[i]=== ' ' && s[i+1] === ' ')){
            
            jumlahKata += 0

        }
        else if(s[i] == ' ' ){
            
            jumlahKata += 1

        }
        else if(s[-1] !== ' ' ){

            jumlahKata += 1
        }


    }

    return jumlahKata

}

console.log(howManyWord("aku suka javascript fullstack"))




// Soal 5

/*

    Algoritma

    1. Buat function dengan nama searchWord dengan dua parameter (word dan c)
        1. word adalah sebuah kalimat
        2. c adalah karakter yang ada di dalam kalimat

    2. Buat variabel hasil dengan nilai 0
    
    3. Lakukan looping sebanyak karakter word, mulai dari 0 hingga kurang dari banyaknya karakter.

    4. Gunakan looping untuk mencari setiap karakter pada kalimat melalui indeks.
        
    5. Buat conditional di dalam looping.

        5.1 Jika nilai parameter c terdapat pada kalimat, nilai hasil bertambah satu
        
        5.2 Jika tidak ada nilai c pada kalimat , nilai hasil tidak bertambah atau tambah dengan nilai nol
    
    6. Buat conditional di luar looping

        6.1 jika variabel hasil > 0, maka return nilai true

        6.2 lainnya return nilai false


*/ 

function searchWord(word, c){

    let hasil = 0;

    for( let i = 0 ; i < word.length ; i++){

        if( c === word[i]){
            hasil += 1
        }
        else{
            hasil += 0
        }

    }
   
    hasil = hasil > 0 ?  true : false
    return hasil
    
}

console.log(searchWord("aku suka kamu","k"))
console.log(searchWord("aku suka kamu","z"))

// Soal 6

/*

    Algoritma

    1. Buat fungsi bernama deretRam dengan satu buah parameter (k)
        1.1 k merupakan sebuah angka

    2. Buat variabel bernama byte di dalam function dan inisiasi dengan nilai 1 

    3. Buat variabel bernama deret di dalam function dan inisiasi dengan nilai string kosong

    3. Buat looping hingga sebanyak k, dengan indeks looping pertama adalah 0

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


// Soal 7

/*

    Algoritma

    1. Buat function bernama deretSatu dengan sebuah parameter (k)
        1.1 k merupakan sebuah angka

    2. Buat variabel bernama satu dengan inisisasi angka 1 dalam bentuk string

    3. Buat variabel bernama deret dan inisiasi dengan string kosong

    3. Buat looping sebanyak k dengan indeks looping bermula dari  satu

    4. Setiap looping, tambahkan deret dengan variabel satu dan tanda koma, lalu disimpan ke dalam variabel deret

    5. Setiap looping, tambahkan angka 1 dalam bentuk string dengan variabel satu, llau disimpan ke dalam variabel satu

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


// Soal 8

/*
    Algoritma

    1. Buat fungsi bernama deretNegation dengan satu parameter (k)
        1.1 k merupakan sebuah angka

    2. Di dalam fungsi, buat variabel bernama deret dan inisiasi denan nilai 0

    3. Buat variabel bernama temp dan insiasi dengan string kosong

    4. buat looping sebanyak k

    5. Di dalam looping buat conditional statement

        5.1 Jika nilai variabel deret adalah 0, tambahkan deret dengan -1
        
        5.2 Tambahkan temp dengan deret 
        
        5.3 Jika nilai varibael deret adalah negatif,  kalikan dengan -1
        5.4 tambahkan variabel temp dengan deret dan tanda koma

        5.5 Jika nilai variabel deret adalah positif, tambahkan 1 dan kalikan dengan -1

        5.6 tambahkan variabel temp dengan deret dan tanda koma
    
    6. Setelah selesai looping, return  nilai variabel temp
    
*/

function deretNegation(k){

    let deret = 0
    let temp = ''

    for(let i = 0 ; i < k ; i++){

        if( deret === 0 ){

            deret += -1
            temp += deret + ', '

        }

        else if( deret < 0 ){

            deret *= -1
            temp += deret + ', '

        }
        else{

            deret += 1
            deret *= -1
            temp += deret + ', '

        }

    }

    return temp
}

console.log(deretNegation(25))

// Soal 9

/*

    Algoritma

    1. Buat fungsi bernama randomPosition dengan 1 parameter (k)
        1.1 k merupakan angka 0 hingga 9
    
    2. Buat variabel bernama n dan insiasikan dengan k
    
    2. Buat variabel bernama temp dan inisiasikan dengan string kosong

    3. Buat variabel bernama kString

    4. Inisiasi variabel kString dengan nilai num yang diubah ke dalam string

    5. Lakukan looping sebanyak 900 kali dengan posisi indeks looping awal di 100

    6. buat variabel nString

    7. Inisiasi variabel nString dengan indeks looping yang diubah ke dalam string

    8. buat variabel flag dan inisiasi dengan nilai 0

    8. Di dalam looping, buat looping sebanyak karakter nString untuk mencari nilai setiap indeks nString

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

// Soal 10

/*

    Algoritma

    1. Cari definisi Palindrome
    
    2. Buat fungsi bernama isPalindrome dengan parameter s
        2.1 s merupakan string

    3. Buat variabel bernama sentence1 dengan inisiasi nilai paramater s

    4. Buat variabel bernama sentence2 dengan inisiasi string kosong

    5. Lakukan looping sebanyak karakter sentence1

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

// Soal 13

/*
    Algoritma

    1. Buat fungsi bernama maxWordLength dengan sebuah parameter (x)
        1.1 parameter x merupakan sebuah input string

    2. Buat variabel bernama arr

    3. Inisiasikan variabel arr dengan parameter yang displit setiap spasi

    4. buat variabel bernama elementLength

    5. inisiasikan elementLength dengan panjang element dari indeks pertama arr

    6. buar variabel bernama elementString

    7. inisiasikan elementString dengan element dari indeks pertama arr 

    6. Buat looping dan dapatkan tiap-tiap elemen arr mulai dari indeks 1

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


// Soal 16

/*

    Algoritma

    1. Buat fungsi bernama factorial dengan sebuah parameter (n)
        1.1 n merupakan sebuah angka
    
    2. Buat variabel bernama hasilFaktorial dan inisiasikan dengan angka 1

    3. Buat if conditional
        3.1 Jika n = 1 maka hasilFaktorial dikalikan dengan 1
        3.2 Jika n > 1 maka n dikali fungsi factorial dengan parameter dikurangi 1
        3.3 Selain itu beri perintah untuk mengisikan parameter dengan angka positif dengan benar
    
    4. Return nilai hasilFaktorial
    
    


*/

function factorial(n){

    let hasilFaktorial = 1;

    if(n == 1){
        hasilFaktorial *= 1
    }
    else if(n > 1){
        hasilFaktorial = n * factorial(n-1)
    }
    else{
        hasilFaktorial = 'Masukan angka positif dengan benar'
    }

    return hasilFaktorial
    
}

console.log(factorial(5))

// Soal 17

/*
    Algoritma

    1. Memahami definisi mendaki: satu kali mendaki adalah 1 kali naik dan  1 kali turun
    1. Buat function countValley dengan sebuah parameter (road)
        1.1 road adalah sebuah string
    
    2. Buat variabel bernama naik dan inisiasikan dengan angka 0

    3. Buat variabel bernama turun dan inisiasikan dengan angka 0

    4. Buat looping sebanyak karakter road
    
    5. Di dalam looping, Buat conditional statement:
        5.1 jika suatu indeks adalah D dan indeks selanjutnya adalah U maka dihitung satu kali naik
        5.2 Jika suatu indeks adalah U dan indeks selanjtnya adalah D maka dihitung satu kali turun


*/



function countValley(road){

    let naik = 0;
    let turun = 0;
    let mendaki = 0;

    for(let i = 0 ; i < road.length-1 ; i++ ){
        
        if( road[i] == 'D' && road[i+1] =='U'){
           
            naik += 1

        }
        else if( road[i]=='U' &&  road[i+1]=='D'){
            
            turun += 1

        }

    }


    if( naik === turun){


        mendaki += naik


    }

    else if( naik > turun){

        mendaki += turun

    }

    else if( turun > naik ){

        mendaki += naik
    }

    return mendaki;

}

console.log(countValley('UDDDUDUU'))