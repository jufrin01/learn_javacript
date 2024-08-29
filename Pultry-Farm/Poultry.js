class Poultry {
    constructor(id, category, price) {
        this.id = id;
        this.category = category || 'others';
        this.price = price || 0;
    }
}

class Chicken extends Poultry {
    constructor(id , price , isMature) {
        super(id , "chicken", price);
        this.isMature = isMature || 'n';
    }
}

class Quail extends Poultry {
    constructor(id, price, isMature) {
        super(id, "quail", price);
        this.isMature = isMature || 'n';
    }
}

class Duck extends Poultry {
    constructor(id, price , isMature) {
        super(id, "duck", price);
        this.isMature = isMature || 'n';
    }
}

class Horse extends Poultry {
    constructor(id, price , isMature) {
        super(id, "horse", price);
        this.isMature = isMature || 'n';
    }
}

class Beef extends Poultry {
    constructor(id, price , isMature) {
        super(id, "beef", price);
        this.isMature = isMature || 'n';
    }
}

class Fish extends Poultry {
    constructor(id, price , isMature) {
        super(id, "fish", price);
        this.isMature = isMature || 'n';
    }
}

class Others extends Poultry {
    constructor(id, category ,price  , isMature) {
        super(id, category, price);
        this.isMature = isMature || 'n';
    }
}

module.exports = {
    Chicken, Quail, Duck, Horse, Beef, Fish, Others
}