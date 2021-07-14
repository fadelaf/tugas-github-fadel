  
/**
 * ======== HRD Hiring Method =====
 * 
 * Seorang HRD ingin menghire seorang karyawan.
 * Loker yang tersedia ada 3 jenis : Junior, Middle, Senior.
 * 
 * Syarat :
 * Junior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 4.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 * 
 * Middle : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 6.500.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
 * 
 * Senior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 9.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000
 * 
 * Buatlah algoritma, pseudocode dan codingnya. (Tanpa func)
 */


/* Algoritma

  1. Buat varibael bernama statEmployee dan pengalaman
    1.1 Inisiasikan variabel status dengan string  'Junior' atau 'Middle atau 'Senior'
    1.2 Inisiasikan variabel pengalaman dengan integer lebih dari sama dengan 0

  2. Jika status adalah Junior
    2.1 Jika pengalamannya kurang dari 2 maka gajinya Rp. 3.000.000
    2.2 Jika pengalamannya antara 2 sampai 5 maka gajinya  Rp. 4.000.000
    2.3 Jika pengalamannya lebih dari 5, maka gajinya Rp. 5.000.000

   3. Jika status adalah Middle
     3.1 Jika pengalamannya kurang dari 2 maka gajinya Rp. 5.500.000
     3.2 Jika pengalamannya antara 2 sampai 5 maka gajinya  Rp. 6.500.000
     3.3 Jika pengalamannya lebih dari 5, maka gajinya Rp. 7.500.000
    
   4. Jika status adalah Senior
     4.1 Jika pengalamannya kurang dari 2 maka gajinya Rp. 7.500.000
     4.2 Jika pengalamannya antara 2 sampai 5 maka gajinya  Rp. 9.000.000
     4.3 Jika pengalamannya lebih dari 5, maka gajinya Rp. 10.000.000

*/

let statEmployee = 'Middle'
let pengalaman = 1

if(statEmployee == 'Junior'){
    if(pengalaman < 2){
        console.log('Rp. 3.000.000')
    }
    else if(pengalaman >= 2 && pengalaman <= 5){
        console.log('Rp 4.000.000')
    }
    else{
        console.log('Rp. 5.000.000')
    }
}
else if(statEmployee == 'Middle'){
    if(pengalaman < 2){
        console.log('Rp. 5.500.000')
    }
    else if(pengalaman >= 2 && pengalaman <= 5){
        console.log('Rp 6.500.000')
    }
    else{
        console.log('Rp. 7.500.000')
    }
}
else if(statEmployee == 'Senior'){
    if(pengalaman < 2){
        console.log('Rp. 7.500.000')
    }
    else if(pengalaman >= 2 && pengalaman <= 5){
        console.log('Rp 9.000.000')
    }
    else{
        console.log('Rp. 10.000.000')
    }
}