
class BankAccount {
     
   readonly  userId : number;
    userName: string;
   private userBalance: number;

    constructor(userId : number,
    userName: string,
    userBalance: number){
  
        this.userId = userId;
      this.userName = userName;
      this.userBalance = userBalance;

    }

    addBalance(balnce: number){
         this.userBalance = this.userBalance + balnce;
    }


}

const mezbahVaiAccount = new BankAccount(111, 'mezbah', 20);

mezbahVaiAccount.addBalance(50)
mezbahVaiAccount.addBalance(30)
console.log(mezbahVaiAccount)