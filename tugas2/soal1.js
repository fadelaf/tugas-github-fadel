
let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];


fruits.push('Anggur','Banana','Sirsak')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.splice(2,1)
console.log(fruits)

fruits.splice(2,3)
console.log(fruits)

fruits.splice(2,0,"Rambutan", "Bangkuang")
console.log(fruits)

fruits.splice(4,1,"Nangka")
console.log(fruits)


fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

let sayurfruits = fruits.concat(sayur)
console.log(sayurfruits)

sayurfruits.reverse()
console.log(sayurfruits)

function AddandRemove(jenis,addItem,removeItem ){

    

}