
let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

// a
fruits.push('Anggur','Banana','Sirsak')
console.log(fruits)
// b
fruits.pop()
console.log(fruits)
// c
fruits.splice(2,1)
console.log(fruits)
// d
fruits.splice(2,3)
console.log(fruits)
// e
fruits.splice(2,0,"Rambutan", "Bangkuang")
console.log(fruits)
// f
fruits.splice(4,1,"Nangka")
console.log(fruits)

// g
fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

let sayurfruits = fruits.concat(sayur)
console.log(sayurfruits)
// h
sayurfruits.reverse()
console.log(sayurfruits)

//--------------------------------
// i
let sayurfruits2 = fruits.concat(sayur)

function AddandRemove(arr,addItem,removeItem ){

    let arrLower = arr.map( item => item.toLowerCase())
    
    let getIndex = 0;
    let temp = addItem.toUpperCase()

    for(let i = 0 ; i < arr.length ; i ++){
        if( arrLower[i].toUpperCase() == removeItem.toUpperCase()){
            getIndex = arrLower.indexOf(addItem.toLowerCase())
            arrLower[i] = temp
            arrLower[getIndex] = ''

        }

    }

    return arrLower
    

}

console.log(AddandRemove(sayurfruits2,'TOMAT','JERUK'))