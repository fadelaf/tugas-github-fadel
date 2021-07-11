


// Ambil file data
const fs = require('fs');

function readCSV(){

    let data = fs.readFileSync('./data.csv','utf8')
    let splitData = data.split(" ")
    return splitData

}

console.log(readCSV())