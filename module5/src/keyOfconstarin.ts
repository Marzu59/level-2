

type RichPeopleVhicle = {
    car: string;
    bike: string;
    cng: string;
}

type myVhicle1 = "bike" | "car" | "cng";
type myVhicle2 =  keyof RichPeopleVhicle;

const myVhicle:  myVhicle2 = "bike"


type User = {
    id: number;
    name:string;
    address: {
        city: string;
    }
}


const user: User = {
    id: 222,
    name:"Mahmet",
    address: {
        city: "ctg",
    }
}



// const myid = user["id"]
// const addressMy = user["address"]

// console.log({myid, addressMy})

// const getPropertyFromObject = (obj: User, key: keyof User)=>{
//     return obj[key];
// }
// for any types of objects
const getPropertyFromObject = <X>(obj: X, key: keyof X)=>{
    return obj[key];
}


const student = {
    product: "hp",
}

const result2 = getPropertyFromObject(student, "product")

// const result = getPropertyFromObject(user, "address")

console.log(result2)