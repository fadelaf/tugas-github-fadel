


// Ambil file data
const fs = require('fs');

const product = function() {

    let data = fs.readFileSync('./data.csv','utf8')
    let splitData = data.split(" ")

    
    // let item1 = splitData.slice(0,2).join(' ')
    // let item2 = splitData.slice(2,5).join(' ')
    // let item3 = splitData.slice(5,8).join(' ')
    // let item4 = splitData.slice(8,10).join(' ')
    // let item5 = splitData.slice(10,13).join(' ')
    // let item6 = splitData.slice(10,13).join(' ')
    // let item7 = splitData.splice(13,3).join(' ')
    // let item8 = splitData.splice(13,2).join(' ')


    let item1 = splitData.splice(0,2).join(' ')
    let item2 = splitData.splice(0,3).join(' ')
    let item3 = splitData.splice(0,3).join(' ')
    let item4 = splitData.splice(0,2).join(' ')
    let item5 = splitData.splice(0,3).join(' ')
    let item6 = splitData.splice(0,3).join(' ')
    let item7 = splitData.splice(0,2).join(' ')
    let item8 = splitData.splice(0,3).join(' ')
    let item9 = splitData.splice(0,3).join(' ')
    let item10 = splitData.splice(0,3).join(' ')
    let item11 = splitData.splice(0,3).join(' ')
    let item12 = splitData.splice(0,3).join(' ')
    let item13 = splitData.splice(0,2).join(' ')
    let item14 = splitData.splice(0,4).join(' ')
    let item15 = splitData.splice(0,8).join(' ')
    let item16 = splitData.splice(0,5).join(' ')
    let item17 = splitData.splice(0,4).join(' ')
    let item18 = splitData.splice(0,5).join(' ')
    let item19 = splitData.splice(0,1).join(' ')
    let item20 = splitData.splice(0,1).join(' ')


    let arr = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20]

    return arr.sort()

    

}

function outputScreen(callback){

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.toUpperCase()

    let str =''

    for(let i = 0 ; i < alphabet.length; i++){

        str += `==== ${alphabet[i]} ====\n`


        for(let j = 0 ; j < callback().length ; j++ ){


            if( callback()[j][0] == alphabet[i]){

                str += callback()[j]
                str += '\n'
                
            }


        }

        str+= '\n\n'


    }


    return str



}

console.log(outputScreen(product))


