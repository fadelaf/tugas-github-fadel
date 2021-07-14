
/**
 * UNIQUE DUPLICATE FINDER
 * =======================
 * 
 * uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat. 
 * Function akan memberikan return object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.
 * 
 * Contoh:
 *   - Input  : uniqueFinder('saya dan SAYA suka makan nasi'))
 *   - Output : {
 *       unique: [ 'dan', 'suka', 'makan', 'nasi' ],
 *       duplicate: [ 'saya' ]
 *     }
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

function stringToArray(str){
    
    let arr = []
    let word = ''

    for(let i = 0; i < str.length ; i++){
      

      if(str[i] == ' '){
        arr.push(word.toLowerCase())
        word = ''
      }
      else{

        word += str[i]

      }

      if(i == str.length-1 ){
        arr.push(word)
      }


    }


    return arr
}


console.log(stringToArray('saya dan SAYA suka makan nasi'))
// ["saya", "dan", "saya", "suka", "makan", "nasi"]

function uniqueDuplicateFinder(str) {

  let stringArr = stringToArray(str) 

  let duplicateFinder = {
    
    unique : [],
    duplicate: []

  }

  let objFinder = {}

  for(let i = 0 ; i < stringArr.length ; i++){

    if(stringArr[i] in objFinder){

      objFinder[stringArr[i]] += 1

    }
    else{
      objFinder[stringArr[i]] = 1
    }

  }

  for( i in objFinder){

    if( objFinder[i] > 1){
      duplicateFinder.duplicate.push(i)
    }
    else{
      duplicateFinder.unique.push(i)
    }


  }

  return duplicateFinder
}

// // Test Case
console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'));
// // {
// //   unique: ['dan', 'suka', 'makan', 'nasi'],
// //   duplicate: ['saya']
// // }


console.log(uniqueDuplicateFinder('dia percaya aku percaya'));
// // {
// //   unique: ['dia', 'aku'],
// //   duplicate: ['percaya']
// // }

module.exports = uniqueDuplicateFinder;
