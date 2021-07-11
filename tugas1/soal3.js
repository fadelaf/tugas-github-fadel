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