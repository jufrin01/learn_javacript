const fs = require('fs');
const { Chicken, Quail, Duck, Horse, Beef, Fish, Others } = require('./Poultry');

class Farm {
    static readCSV() {
        let temp = fs.readFileSync('./poultries.csv', 'utf8');
        let tempsplit = temp.split('\r\n');
        let tempdata = [];
        for (let i = 1; i < tempsplit.length; i++) {
            tempdata.push(tempsplit[i].split(','));
        }
        let poultryList = tempdata.map(data => {
            let [id, category, price, isMature] = data;
            switch (category) {
                case 'chicken':
                    return new Chicken(+id, +price, isMature);
                case 'quail':
                    return new Quail(+id, +price, isMature);
                case 'duck':
                    return new Duck(+id, +price, isMature);
                case 'horse':
                    return new Horse(+id, +price, isMature);
                case 'beef':
                    return new Beef(+id, +price, isMature);
                case 'fish':
                    return new Fish(+id, +price, isMature);
                default:
                    return new Others(+id, +price, isMature);
            }
        })
        return poultryList;
        //console.log(poultryList);
    }

    static total() {
        let poultryList = this.readCSV();
        let count = {
            chicken: 0,
            quail: 0,
            duck: 0,
            horse: 0,
            beef: 0,
            fish: 0,
            others: 0
        }

        poultryList.forEach(poultry => {
            let {category} = poultry;
            switch (category) {
                case 'chicken':
                    count.chicken++;
                    break;
                case 'quail':
                    count.quail++;
                    break;
                case 'duck':
                    count.duck++;
                    break;
                case 'horse':
                    count.horse++;
                    break;
                case 'beef':
                    count.beef++;
                    break;
                case 'fish':
                    count.fish++;
                    break;
                default:
                    count.others++;
                    break;
            }
        })
        console.log("total Poltry list :");
        console.log('Chickens :', count.chicken, 'pcs');
        console.log('Quails :', count.quail, 'pcs');
        console.log('Ducks :', count.duck, 'pcs');
        console.log('Horses :', count.horse, 'pcs');
        console.log('Beef :', count.beef, 'pcs');
        console.log('Fish :', count.fish, 'pcs');
        console.log('Others :', count.others, 'pcs');
        console.log('Total :', poultryList.length, 'pcs');
        console.log("-------------------------------------");
    }

    static addPoultry(category, prince) {
        let poultryList = this.readCSV();
        let newpoultry;
        let id = Math.max(...poultryList.map(p => p.id)) + 1;
        switch (category) {
            case 'chicken':
                poultryList.push(new Chicken(id, +prince));
                break;
            case 'quail':
                poultryList.push(new Quail(id, +prince));
                break;
            case 'duck':
                poultryList.push(new Duck(id, +prince));
                break;
            case 'horse':
                poultryList.push(new Horse(id, +prince));
                break;
            case 'beef':
                poultryList.push(new Beef(id, +prince));
                break;
            case 'fish':
                poultryList.push(new Fish(id, +prince));
                break;
            default:
                newpoultry = new Others(id, category, +prince);
                break;
        }
        // console.log(poultryList);
        poultryList.push(newpoultry);
        this.saveCSV(poultryList);
    }

    static saveCSV(poultryList) {
        let result = ['id,category,price,isMature'];
        for(let i = 1 ; i < poultryList.length; i++) {
            if(poultryList[i] && typeof poultryList[i] === 'object') {
                let {id, category, price, isMature} = poultryList[i];
                if(id !== undefined && category !== undefined && price!== undefined && isMature!== undefined) {
                    result.push(`${id},${category},${price},${isMature}`);
                }
            }
        }
        let fixedResult = result.join('\r\n');
        console.log(fixedResult);
        fs.writeFileSync('./poultries.csv', fixedResult);
    }

    static  sellPoutry(id){
        let poutries = this.readCSV()
        poutries = poutries.filter(p => p.id !== +id)
        this.saveCSV(poutries)
    }
}

module.exports = Farm;