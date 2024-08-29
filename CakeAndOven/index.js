class Cookies {
    constructor(name , type , price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

//TODO : BUAT CLASS CHOCOLATE COOKIES, STRAWBERRY COOK
// SUBCLASS ADALAH MENGAMBILIN PROPERTI DI SUPER CLASSNYA YAITUN NAME, TYPE, PRICE DI CLASS PARENTNYA = Cookies
class ChocolateCookies extends Cookies {
    constructor(name, type, price, isSweet) {
        super(name, type, price);
        this.isSweet = isSweet ;
    }
}

class StrawberryCookies extends Cookies {
    constructor(name, type, price, isSweet) {
        super(name, type, price);
        this.isSweet = isSweet;
  }
}

class BlueberryCookies extends Cookies {
    constructor(name, type, price, isSweet) {
        super(name, type, price);
        this.isSweet = isSweet;
    }
}
// TODO OVEN CLASS = FACTORY CLASS NYA
class Oven {
    constructor(container) {
        this.container = container || [];
    }

    bake(cookies) {
        this.container.push(cookies);
      //  console.log(`${cookies.name} cookies are baked in the oven.`);
    }

    delever(cookies_name) {
        this.container = this.container.filter(cookie => cookie.name !== cookies_name);
      //  console.log(`${cookies.name} cookies are delivered from the oven.`);
    }
}

//TODO ARTI DARI NEW OVEN ADALAH INISIASI OBJECT OVEN DENGAN CONTAINER YANG KOSONG

let oven = new Oven();
oven.bake(new ChocolateCookies('Sugar cookies', 'Sugar', 100000, false));
oven.bake(new StrawberryCookies('Strawberry cookies', 'Strawberry', 150000, false));
oven.bake(new BlueberryCookies('Blueberry cookies', 'Blueberry', 1 , true));
oven.delever("Strawberry cookies");
console.log(oven.container);


