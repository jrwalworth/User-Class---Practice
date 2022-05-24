class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        if( amount <= this.accountBalance){
            this.accountBalance -= amount;
        } else {
            console.log('Insufficient funds!')
        }
        
    }
    displayBalance() {
        return console.log(this.accountBalance);
    }
    transferMoney(amount, user) {
        if (amount <= this.accountBalance) {
            this.accountBalance -= amount;
            user.accountBalance += amount;
        } else {
            console.log('Transfer Failed - Insufficient funds');
        }
    }
}

const Jason = new User('jrwalworth', 'jrwalworth@gmail.com');
const Eric = new User('emoney', 'e@yahoo.com');
const Sasha = new User('Sasha1', 'sash@hotmail.com');

console.log('Jason', Jason);
Jason.makeDeposit(500);
Jason.makeDeposit(50);
Jason.makeDeposit(25);
Jason.makeWithdrawal(5);
Jason.displayBalance();
console.log('Jason', Jason);

console.log('Eric', Eric);
Eric.makeDeposit(2500);
Eric.makeDeposit(1000);
Eric.makeWithdrawal(200);
Eric.makeWithdrawal(300);
Eric.displayBalance();
console.log('Eric', Eric);

console.log('Sasha', Sasha);
Sasha.makeDeposit(1000);
Sasha.makeWithdrawal(20);
Sasha.makeWithdrawal(20);
Sasha.makeWithdrawal(20);
Sasha.displayBalance();
console.log('Sasha', Sasha);

console.log('after $ transfer...');
Eric.transferMoney(250, Sasha);
Eric.displayBalance();
console.log('Eric', Eric);
Sasha.displayBalance();
console.log('Sasha', Sasha);


