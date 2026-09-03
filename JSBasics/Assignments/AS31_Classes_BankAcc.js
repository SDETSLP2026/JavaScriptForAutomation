/*
Classes_Assignment-2
PS: Create a BankAccount class with the following:
• accountHolder
• balance
• deposit()
• withdraw()
• checkBalance()
*/

class BankAccount{
    accountHolder;
    balance;

    constructor(accountHolder,balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance = this.balance - amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    checkBalance(){
        console.log(`Current balance for ${this.accountHolder} is ${this.balance}`);
    }
}

//Creating an object of BankAccount class
let acc1 = new BankAccount("Sneha", 1000);
acc1.checkBalance();
acc1.deposit(500);
acc1.withdraw(300);
acc1.checkBalance();