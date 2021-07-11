// Soal 5

/*

    Algoritma

    1. Buat function dengan nama searchWord dengan dua parameter (word dan c)
        1. word adalah sebuah kalimat
        2. c adalah karakter yang ada di dalam kalimat

    2. Buat variabel hasil dengan nilai 0
    
    3. lakukan looping sebanyak karakter word, mulai dari 0 hingga kurang dari banyaknya karakter.

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