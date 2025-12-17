// normal khetere typealias 
// object er khetre interface
// extend er joonno interface
// arry, function er khetre typeAlias 


type User = {
    name: string;
    age: number;
}
type Role = {
    role:  'admin'  | 'user';

}

interface IUser {
    name: string;
    age: number;
}



type userWithRole = User & Role;


interface IusrWithRole extends IUser {
      role: 'admin' | 'user';
}


const user1: IusrWithRole = {
    name: "Alim",
    age: 222,
    role: 'admin'
}

interface Ifriends {
  [index: number] : string;
}

const friends: Ifriends = ["a", "b", "c"]


//
type Add = (num1: number, num2: number)=> number;

// const add:Add = (num1, num2)=> num1 + num2;

// alternative

interface Iadd {
  (num1: number, num2: number) : number;
}

const add:Iadd = (num1, num2)=> num1 + num2;