// Soal 17

/*
    Algoritma

    1. Memahami definisi mendaki: satu kali mendaki adalah 1 kali naik dan  1 kali turun
    1. Buat function countValley dengan sebuah parameter (road)
        1.1 road adalah sebuah string
    
    2. Buat variabel bernama lowestPoint dan inisiasikan dengan angka 0

    3. Buat variabel bernama naikTurun dan inisiasikan dengan angka 0

    4. Buat variabel bernama mendaki dan inisiasikan dengan angka 0

    5. lakukan looping sebanyak karakter parameter road
    
    6. Di dalam looping, Buat conditional statement:
        5.1 jika suatu indeks adalah D maka naikTurun dikurangi 1
        5.2 Jika suatu indeks adalah U maka naikTurun ditambah 1
    
    7. Jika naikTurun lebih kecil dari lowestPoint, masukan nilai lowestpoint sama dengan naikTurun, lalu reset ulang mendaki ke 0

    8. Jika naikTurun sama dengan lowestPoint, tambahkan mendaki dengan 1

    9. kembalikan nilai mendaki
*/



function countValley(road){
    
    let lowestPoint = 0;
    let naikTurun = 0;
    let mendaki = 0;

    for(let i = 0 ; i < road.length ; i++ ){


    if( road[i] == 'U'){
            naikTurun += 1
    }
    
        
    else if( road[i] == 'D'){
           
            naikTurun -= 1

    }


    
    
    if( naikTurun <  lowestPoint ){
        lowestPoint = naikTurun
        mendaki = 0
    }
    else if(naikTurun == lowestPoint){
        mendaki += 1

    }



}

return mendaki

}

console.log(countValley('UDDDUDUU'))