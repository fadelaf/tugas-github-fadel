// Soal 8

/*
    Algoritma

    1. Buat fungsi bernama deretNegation dengan satu parameter (k)
        1.1 k merupakan sebuah angka

    2. Di dalam fungsi, buat variabel bernama deret dan inisiasi denan nilai 0

    3. Buat variabel bernama temp dan insiasi dengan string kosong

    4. lakukan looping sebanyak k

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