type User = {

    id: number,
    name: {
        firstName: string
        lastName: string
    },
    gender: 'Male'| 'Female',
    contactNo: string,
address:{
    division: string,
    city: string
}

}




const user1: User = {

     id: 12,
    name: {
        firstName: "Mahmud",
        lastName: "Can"
    },
    gender: 'Male',
    contactNo: "0155524",
address:{
    division: "fddfag",
    city: "dfgdsags"
}
    
}



// console.log(user1)


const user2: User = {

     id: 12,
    name: {
        firstName: "Ahmed",
        lastName: "m"
    },
    gender: 'Male',
    contactNo: "00055524",
address:{
    division: "ffdsfag",
    city: "gg"
}
    
}
// console.log(user2)

// const myName: string = 'Ali'
type Name = string;
const myName: Name = 'Alii'
// console.log(myName)



// functin
type Function= (num1: number, num2: number)=> number;

const add: Function =(num1, num2)=> num1 + num2;