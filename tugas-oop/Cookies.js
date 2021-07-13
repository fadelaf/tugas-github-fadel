


class Cookies{

    constructor(id, name, price, type){
        this.id = id
        this.name = name
        this.price = price
        this.type = type
    }


}

class Chocolate extends Cookies {

    constructor(id, name, price, type, isSweet){
        super(id, name, price, type)
        this.isSweet = isSweet
    }



}

class Sweet extends Cookies {

    constructor(id, name, price, type, isSweet){
        super(id, name, price, type)
        this.isSweet = isSweet
    }

}

class Strawberry extends Cookies {

    constructor(id, name, price, type, isSweet){
        super(id, name, price, type)
        this.isSweet = isSweet
    }
}

module.exports =  {
    Chocolate, Sweet, Strawberry
}