class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this
    }
    makeWithdrawal(amount) {
        if( amount <= this.accountBalance){
            this.accountBalance -= amount;
            return this
        } else {
            console.log('Insufficient funds!')
        }
        
    }
    displayBalance() {
        console.log(this.accountBalance);
        return this
    }
    transferMoney(amount, user) {
        if (amount <= this.accountBalance) {
            this.accountBalance -= amount;
            user.accountBalance += amount;
            return this
        } else {
            console.log('Transfer Failed - Insufficient funds');
        }
    }
}

const Jason = new User('jrwalworth', 'jrwalworth@gmail.com');
const Eric = new User('emoney', 'e@yahoo.com');
const Sasha = new User('Sasha1', 'sash@hotmail.com');

console.log('Jason Initial:', Jason);
Jason.makeDeposit(500).makeDeposit(50).makeDeposit(25).makeWithdrawal(5).displayBalance();
console.log('Jason After Activity:', Jason);

console.log('Eric Initial:', Eric);
Eric.makeDeposit(2500).makeDeposit(1000).makeWithdrawal(200).makeWithdrawal(300).displayBalance();
console.log('Eric After Activity:', Eric);

console.log('Sasha Initial:', Sasha);
Sasha.makeDeposit(1000).makeWithdrawal(20).makeWithdrawal(20).makeWithdrawal(20).displayBalance();
console.log('Sasha After Activity', Sasha);

console.log('after $ transfer...');
Eric.transferMoney(250, Sasha);
Eric.displayBalance();
console.log('Eric', Eric);
Sasha.displayBalance();
console.log('Sasha', Sasha);


