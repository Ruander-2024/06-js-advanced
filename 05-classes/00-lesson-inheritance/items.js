class Item{
    constructor(name, price, url){
        this._name = name;
        this._price = price;
        this._url = url;
    }

    get itemInfo() {
        return this._name + " " + this._price;
    }
}

class SponsoredItem extends Item{
    constructor(name, price, url, sponsoredBy, days){
        super(name, price, url);
        this._sponsoredBy = sponsoredBy;
        this._days = days;
    }

    get days(){
        return this._days + 7;
    }

    get sponsoredBy(){
        return this._sponsoredBy;
    }
}

class DiscountedItem extends Item{
    constructor(name, price, url, percentage){
        super(name, price, url);
        this._percentage = percentage;
    }

    get discount(){
        return this._price - ((this._price * this._percentage) / 100);
    }
}

item1 = new Item('Játékautó', 5000, 'https://jatekauto.hu');
item2 = new Item('Fánk', 2700, 'https://fank.hu');
item3 = new SponsoredItem('Plüss', 6400, 'https://pluss.hu', 'Regio', 14);
item4 = new DiscountedItem('Hajó', 9100, 'https://hajo.hu', 15);

console.log(item1);
console.log(item2);
console.log(item3.days);
console.log(item3.itemInfo);
console.log(item4.discount);