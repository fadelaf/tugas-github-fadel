// Soal 17

/*
    Algoritma

    1. Memahami definisi mendaki: satu kali mendaki adalah 1 kali naik dan  1 kali turun
    1. Buat function countValley dengan sebuah parameter (road)
        1.1 road adalah sebuah string
    
    2. Buat variabel bernama naik dan inisiasikan dengan angka 0

    3. Buat variabel bernama turun dan inisiasikan dengan angka 0

    4. lakukan looping sebanyak karakter parameter road
    
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