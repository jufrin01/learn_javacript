const { Income, Expense } = require('./IncomeExpense');
const fs = require('fs');

class Note {
    // constructor(list) {
    //     this.list = list || [];
    // }
    //
    // addIncome(name , total) {
    //     let income = new Income(name , total , "Income");
    //     this.list.push(income);
    // }
    //
    // addExpense(name , total) {
    //     let expense = new Expense(name , total , "Expense");
    //     this.list.push(expense);
    //
    // }
    //
    // listIncomes() {
    //     console.log("List Incomes:");
    //     this.list.forEach(inc => {
    //         if(inc.category === "Income"){
    //             console.log(`${inc.name}: Rp. ${inc.total}`);
    //         }
    //     })
    // }
    //
    // listExpenses() {
    //     console.log("List Expenses:");
    //     this.list.forEach(exp => {
    //         if(exp.category === "Expense"){
    //             console.log(`${exp.name}: Rp. ${exp.total}`);
    //         }
    //     })
    // }
    //
    // static balance() {
    //     let totalIncome = 0;
    //     let totalExpense = 0;
    //
    //     this.list.forEach(el => {
    //         if(el.category === "Income"){
    //             totalIncome += el.total;
    //         }else if(el.category === "Expense"){
    //             totalExpense += el.total;
    //         }
    //     })
    //     let balance = totalIncome - totalExpense;
    //     if(balance === 0){
    //        console.log("balance: Rp.0");
    //     }else if(balance < 0){
    //         console.log(`balance: Rp.${balance} (Negative)`);
    //     }else if(balance > 0){
    //         console.log(`balance: Rp.${balance} (Positive)`);
    //
    //     }
    // }

    static listIncomes() {
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let incomes = temp.incomes;
        console.log("List Incomes:");
        incomes.forEach(inc => {
            const {name, total} = inc;
            console.log(`${name}: Rp.${total}`);
        })
    }

    static listExpenses() {
        const temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        const expenses = temp.expenses;
        console.log("List Expenses:");
        expenses.forEach(exp => {
            const {name, total} = exp;
            console.log(`${name}: Rp.${total}`);
        })
    }

    static addincome(name, total) {
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let income = new Income(name, total, "Income");
        temp.incomes.push(income);
        this.saveData(temp);
    }

    static addExpense(name, total) {
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let expense = new Expense(name, total, "Expense");
        temp.expenses.push(expense);
        this.saveData(temp);
    }

    static balance() {
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach(income => {
            totalIncome += income.total;
        })
        temp.expenses.forEach(expense => {
            totalExpense += expense.total;
        })
        console.log(totalIncome , totalExpense);
        let balance = totalIncome - totalExpense;
        if(balance === 0){
            console.log("Balance: Rp.0");
        }else if(balance < 0){
            console.log(`balance: Rp.${balance} (Negative)`);
        }else if(balance > 0){
            console.log(`balance: Rp.${balance} (Positive)`);
        }
    }

   static  saveData(data){
        fs.writeFileSync('./data.json', JSON.stringify(data , null, 3));
        console.log('Data saved');
   }
}

module.exports = Note;