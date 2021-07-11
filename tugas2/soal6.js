/*
    Algoritma
    
    1. Buat function bernama isCharsUnique dengan 1 paramter x
        1.1 x merupakan sebuah string

    2. Buat sebuah objek bernama countLetter

    3. Lakukan looping sebanyak karakter x
        3.1 Jika tiap karakter sudah menjadi key pada object countLetter, tambah value dengan 1
        3.2 Jika tiap karakter belum menjadi key pada object countLetter, isi dengan 1
    
    4. Buat variabel bernama result

    5. Lakukan looping bernama untuk mengecek setiap key dari object countLetter
        5.1 Jika terdapat value dari setiap key yang melebihi nilai 1, isikan variabel result dengan false
        5.2 Jika value dari setiap key hanya memiliki 1, isikan variabel result dengan true
    
    6. Return nilai variabel result



*/

function isCharsUnique(x){

    let countLetter = {}

    for(let i = 0 ; i < x.length ; i++){

        if( x[i] in countLetter ){
            countLetter[x[i]] += 1
           
        }
        else{
            countLetter[x[i]] = 1
       
        }

    }

    let result;

    for( i in countLetter){
        if(countLetter[i] > 1){
            result = false
        }
        else{
            result = true
        }
    }

    return result

}

console.log(isCharsUnique('abcdef'))