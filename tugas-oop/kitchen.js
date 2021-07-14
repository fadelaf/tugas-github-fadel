



const fs = require('fs');

const {Chocolate, Sweet, Strawberry} = require('./Cookies.js')


class Kitchen {

    constructor(cake){
        this.cake = cake || []
    }


    bake(...newKue){

        let Kue = this.getCookies()

        // karena id bertambah, id dipisah
        // User memasukan input kue baru tanpa id sehingga id bertambah sendiri
        let id = Kue.length + 1

        // Destructuring array ke dalam variabel
        let [name, price, type, isSweet] = newKue


        // Kelompokkan ke dalam tipe kue lalu push ke Kue yang berbentuk array
        switch(type){

            case 'Chocolate':
                Kue.push(new Chocolate(id, name, price, type, isSweet))
                break;
            
            case 'Strawberry':
                Kue.push(new Strawberry(id, name, price, type, isSweet))
                break;
            
            case 'Sweet':
                Kue.push(new Sweet(id, name, price, type, isSweet))
                break;
            
            default:
                console.log('Wrong Type Cookies')
    
        }
        
        this.saveToCSV(Kue)
        console.log(`New cake : ${name} has been added`)
        


    }

    eat(idKue){

        let Kue = this.getCookies()

        // let [name, price, type, isSweet] = deleteKue



        Kue.forEach( (item,idx) => {

            if(item['id'] === idKue){

                Kue.splice(idx,1)

            }

        })



        // Kue.forEach( (item,idx) =>{

        //     item['id'] = idx+1

        // })


        this.saveToCSV(Kue)
        console.log(`Cake has been eaten`)
        
        

    }

    addSugar(...tambahGula){

        let Kue = this.getCookies()

        let [id, name] = tambahGula

        let Success = 0

        Kue.forEach(item => {

            if(item['id'] == id && item['name'] == name ){
                item['isSweet'] = true
                Success = 1
            }

        })

        if( Success === 1 ){

            this.saveToCSV(Kue)
            console.log(`Sugar has been added`)
        
            
        }
        else{
            console.log('Not Found')
        }





    }

    showCookies(){

        // Ambil datanya
        let Kue = this.getCookies()
        console.log(`Cake Specification :
        `)
        // Ambil tiap-tiap Objeknya
        Kue.forEach(item => {
            // Destructuring tiap-tiap array
            let { id, name, price, type, isSweet} = item
            console.log(`Cake id   : ${id} 
                         Cake Name : ${name}
                         price     : ${price}
                         This cake is ${type} and ${ (isSweet == true) ? 'Sweet' : 'Not Sweet'} `
                         )

        })




    }

    getCookies(){

        // 1. Panggil data csv terlebih dahulu
        let dataKue = fs.readFileSync('./cookies.csv','utf8')
        let tempData = dataKue.split('\r\n');


        // Jadikan array
        // header kolom tidak perlu diambil
        let arrayKue = []
        for(let i = 1 ; i < tempData.length ; i ++){
            arrayKue.push(tempData[i].split(','))
        }


        // jadikan object
        let Kue = arrayKue.map( item => {
            // destructuring array untuk ambil id,name,price,type

            let [id,name,price,type, isSweet] = item
            // ubah isSweet ke boolean
            isSweet = isSweet == 'true'

    

            switch(type){

                case 'Chocolate':
                    return new Chocolate(+id, name, +price, type, isSweet)
                    break;
                
                case 'Strawberry':
                    return new Strawberry(+id, name, +price, type, isSweet)
                    break;
                
                case 'Sweet':
                    return new Sweet(+id, name, +price, type, isSweet)
                    break;
        
            }

        } )

        //debugging
    // console.log(Kue[0])

        //return value dalam bentuk object dalam list
        return Kue
    }    

    saveToCSV(newCake){

        let arrayKue = [];
        
        // Dari object dalam array, ubah ke array 2 dimensi
        newCake.forEach( item => {

            let {id , name, price, type, isSweet} = item
            arrayKue.push([id, name, price, type, isSweet])

        })

        // console.log(arrayKue)


        let data = ['id,name,type,sugar']

        arrayKue.forEach(item => {
            data.push(item.join(','))
        })

        let fixData = data.join('\r\n');

        
        // console.log(fixData)

        fs.writeFileSync('./cookies.csv', fixData)


    }




}

// let classTest = new Kitchen()
// classTest.getCookies()
// classTest.showCookies()
// classTest.bake("Nastar",25000,"Sweet",true)
// classTest.saveToCSV(1,"Nastar",25000,"Sweet",true)
// classTest.eat('Veggie Cake', 35000, 'Sweet', false)
// classTest.eat('Sweet Cream',15000,'Sweet',true)
// classTest.eat('Nastar',25000,'Sweet',true)  
// classTest.showCookies()

// classTest.addSugar(3,'Veggie Cake',35000,'Sweet')


module.exports = Kitchen