class Item{
    constructor(name, price, url){
        this._name = name;
        this._price = price;
        this._url = url;
    }

    get itemInfo() {
        return this._name + "" +    this._price;
    }    
}

class SponsoredItem extends Item{
    constructor(name, price, url, sonsoredBy, days){
        super(name, price, url);
        this._sponsoredBy = sonsoredBy;
        this._days = days;
    }
    get sponsoredBy(){
    return this._sponsoredBy
}
}

class DiscountedItem extends Item{
    constructor(name, price, url, percentage){
         super(name, price, url);
    this._percentage = percentage
}
}
   
item1 = new Item('Játékautó', 5000, 'https://jatekauto.hu');
item2 = new Item('Fánk', 2000, 'https://fank.hu');
item3 = new SponsoredItem('Plüss', 6400, 'https://pluss.hu', 'Regio', 14);
item4 = new DiscountedItem('Hajó', 4000, 'https://hajo.hu', 15);

console.log(item1);
console.log(item3);

