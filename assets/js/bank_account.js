let bankAccount = {
    firstName: "Elsh",
    withdrawn_money: 0,
    account: 10000,
    withdraw: function(amount){
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
    },
    deposit: function(amount){
        this.account += amount;
        return `Successfully deposited ${amount}`;
    },
    check_account: function(){
        return `${this.firstName} you have ${this.account} in your account`
    }
};

let bankChoice = prompt("Hello "+ bankAccount.firstName + "\n Please enter your operation: deposit, withdraw, check account");
let bankOperation;
let res;
(function() {
    switch(bankChoice){
        case "withdraw": 
            bankOperation = bankAccount.withdraw;
            break;
        case "deposit":
            bankOperation = bankAccount.deposit;
            break;
        case "check account":
            bankOperation = bankAccount.check_account
            res = bankAccount.check_account()
            break;
        default:
            console.log("Please enter a valid operation")
        
    }
    console.log("**************************************************************")
    if(bankOperation && !res){
        
            let amount = prompt("Hello "+ bankAccount.firstName + "\n Please enter amount");
            if(typeof(Number(amount)) == NaN) {
                console.log("Enter numbers only please")
            }
            else{
                res = (bankOperation(Number(amount)))
            }
        
    }
    console.log(res);
    
    console.log("**************************************************************")

})();