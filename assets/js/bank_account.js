class bankAccount {
    constructor(name, account){
        this.firstName = name
        this.withdrawn_money= 0,
        this.account= account
    }

    withdraw(amount){
        let status;
        if(amount > this.account){
            status = "You don't have that much money" 
        }
        else{
            if(amount > 2000 || this.withdrawn_money > 8000) {
                status = "You have either requested to withdraw more than 2000 or you've withdrawn enough for today"
            }
            else{
                this.account -= amount;
                this.withdrawn_money += amount;
                status = `Successfully withdrawn ${amount}`
            }

        }
        return status;
    }
    deposit(amount){
        this.account += amount;
        return `Successfully deposited ${amount}`;
    }
    check_account(){
        return `${this.firstName} you have ${this.account} in your account`
    }
    transfer(amount, transfer_to){
        let status;
        if(amount > this.account){
            status = "You don't have that much money" 
        }
        else{
            this.account -= amount;
            status = `Successfully transferred ${amount}`
            transfer_to.deposit(amount)
        }
        return status;
    }

};
let ElshAccount = new bankAccount("Elsh", 500);
let BetziAccount = new bankAccount("Betzi", 700);
let EdAccount = new bankAccount("Ed", 750);
let accounts = [ElshAccount, BetziAccount, EdAccount];
let accountChoice = prompt("Hello "+ "\n Please enter choose your account 0: Elsh, 1: Betzi, 2: Ed");
let chosenAccount = accounts[Number(accountChoice)];
let bankChoice;
let bankOperation;
let res;
let receiver;
let amount;
(function() {
    bankChoice = prompt("Hello "+ chosenAccount.firstName + "\n Please enter your operation: deposit, withdraw, check account, transfer");

    switch(bankChoice){
        case "withdraw": 
            amount = prompt("Hello "+ chosenAccount.firstName + "\n Please enter amount");
            res = chosenAccount.withdraw(Number(amount))
            break;
        case "deposit":
            amount = prompt("Hello "+ chosenAccount.firstName + "\n Please enter amount");
            res = chosenAccount.deposit(Number(amount))
            break;
        case "check account":
            res = chosenAccount.check_account()
            break;
        case "transfer":
            amount = prompt("Hello "+ chosenAccount.firstName + "\n Please enter amount");
            receiver = prompt("Hello "+ chosenAccount.firstName + "\n Please enter choose to which account 0: Elsh, 1: Betzi, 2: Ed");
            res = chosenAccount.transfer(Number(amount), accounts[receiver])
            break;
        default:
            console.log("Please enter a valid operation")
        
    }
    console.log("**************************************************************")
    if(bankOperation && !res){
        
            amount = prompt("Hello "+ chosenAccount.firstName + "\n Please enter amount");
            if(typeof(Number(amount)) == NaN) {
                console.log("Enter numbers only please")
            }
        
    }
    console.log(res);
    
    console.log("**************************************************************")

})();