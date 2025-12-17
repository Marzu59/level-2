// union
type UserRole = 'Admin' | 'User'

const getDashBoard =(role: UserRole)=>{
  if(role === 'Admin'){
    return "welcome Admin"
  }
  else if(role === 'User'){
    return "welcome User"
  }
  else{
    return "Hello guest "
  }
}


// console.log(getDashBoard('Admin'))

// intersection


type Employe = {
    id: string;
    name: string;
    phoneNO: string;
}
type Manger = {
       designation: string;
       teamSize: number; 
}


type EmployeeManger = Employe & Manger;

const chowduryShaheb: EmployeeManger = {
    id: '125',
     name: "Mahmud",
     phoneNO: '1254614',
     designation: 'manager',
     teamSize: 2002,

}

