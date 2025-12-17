
// getter
//setter



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

    // addBalance(balnce: number){
    //      this.userBalance = this.userBalance + balnce;
    // }

     set addBalance(balance: number){
           this.userBalance = this.userBalance + balance;

     }
   
    // getbal(){
    //    return this.userBalance
    // }
      get getBalance(){
        return this.userBalance;
      }



}

const mezbahVaiAccount = new BankAccount(111, 'mezbah', 20);

// mezbahVaiAccount.addBalance(50)
// mezbahVaiAccount.addBalance(30)

// console.log(mezbahVaiAccount.getbal())

mezbahVaiAccount.addBalance = 13;
mezbahVaiAccount.addBalance = 13;
// console.log(mezbahVaiAccount)
console.log(mezbahVaiAccount.getBalance)