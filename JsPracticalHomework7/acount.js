class Account{
    arrayOfAccounts=[]
    #id=Date.now();
    #balance=0
    constructor(name){
        this.arrayOfAccounts.push(this)
        this.name=name
    } 
    credit(amount){
        this.#balance+=amount;
    }
    debit(amount){
        this.#balance-=amount;
    }
    get id(){
        return this.#id
    }
    transferTo(account,amount){
        if(account instanceof Account){
            this.debit(amount);
            account.credit(amount);    
        }else{
            console.log('specify a valid account object')
        }
    }
    identifyAccount(){
        for(let identifier of this.arrayOfAccounts){
            if(identifier.id===this.id)return identifier;
        }
    }
}
const ac1 = new Account('frac');
const ac2 = new Account('crac');
console.log(ac1.id)
console.log(ac1.identifyAccount())