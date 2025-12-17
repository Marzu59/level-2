// dynamically generalize


type genericArry<value> = Array<value>;


// const friends: string[] = ["Mr. X, Mr. Y, Z"];
// const friends: Array<string>  = ["Mr. X, Mr. Y, Z"];
const friends: genericArry<string>  = ["Mr. X, Mr. Y, Z"];

// const rollNumbers: number[]= [4, 8, 9]
// const rollNumbers: Array<number> = [4, 8, 9]
const rollNumbers: genericArry<number> = [4, 8, 9]

// const isEligibeLIsts: boolean[]= [ true, false, true];
// const isEligibeLIsts: Array<boolean> = [ true, false, true];
const isEligibeLIsts: genericArry<boolean> = [ true, false, true];



    

// object er khetre
type User= {name: string; age: number;}
const userList:genericArry<User> = [
    {name: "df",
        age: 20
    },
    {
        name: "dfa",
        age: 10
    }
]



type CoOrdinates<X, Y> = [X, Y];

const coordinate:CoOrdinates<number, number> = [20, 30];

const coordinate2: CoOrdinates<string, string> = ["20", "32"]


