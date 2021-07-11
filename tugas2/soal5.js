// Soal 5

/*

Algoritma

    1. Buat variabel bernama numbers yang merupakan array berisikan beberapa integer

    2. Buat function bernama numPair dengan paarameter n


*/


let numbers = [1, 2, 3, 4, 5]

function NumPair(n){

    for( let i = 0 ; i < numbers.length ; i++){

        for(let j = i ; j < numbers.length ; j++){

            if(numbers[i] + numbers[j] == n){

                return `Pasangan angkanya adalah ${numbers[i]} dan ${numbers[j]} `

            }

        }

    }


   
}

console.log(NumPair(5))