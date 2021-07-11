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