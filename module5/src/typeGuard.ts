
// typeguard
type AlpaNumaric = number | string;

const add = (num1: AlpaNumaric, num2: AlpaNumaric)=> {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }
    else{
      return  num1.toString() +  num2.toString();
    }
}



add(2, '2') //22
add('2', '2') //22
add(2, 2)

// in guard

type NOrmalUser = {
    name: string;

}
type Admin = {
    name: string;
    role:  string;
};



const getUser =(user: NOrmalUser | Admin)=>{
      
    if('role' in user){
        console.log(`username: ${user.name} and his role is ${user.role}` )
    }

    else{
        console.log(`username is ${user.name}`)
    }




}

getUser({name: "mayed",  role: 'police'})