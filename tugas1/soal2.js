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