// non Primitive : array, object

let MezbahNameAndRoll: [string, number] = ["Mezbah", 22] ;

let destination: [string, string, number] = ['daka', 'ctg', 20];

// or Refrence type

// let user: {
//      firstName: string;
//      middleName: string;
//      lastName: string;
//  } = {
//     firstName : 'Mezbahul',
//     middleName: 'Abedin',
//     lastName: 'Forhan',
// }

// let user: {
//     organizationName: string;
//      firstName: string;
//      middleName?: string;   //optional type (ekhon middle name na dileo hobe)
//      lastName: string;
//      isMarried: boolean;
//  } = {
//     organizationName: 'Programming Hero fire',
//     firstName : 'Mezbahul',
//     // middleName: 'Abedin',
//     lastName: 'Forhan',
//     isMarried: true,

// }
// user.organizationName = 'Ph'
// console.log(user)



// let user: {
//     organizationName: "Programming Hero fire";
//      firstName: string;
//      middleName?: string;   //optional type (ekhon middle name na dileo hobe)
//      lastName: string;
//      isMarried: boolean;
//  } = {
//     organizationName: 'Programming Hero fire',  //value=> type: literal type, unchangable value
//     firstName : 'Mezbahul',
//     // middleName: 'Abedin',
//     lastName: 'Forhan',
//     isMarried: true,

// }

// console.log(user)



// Or



let user: {
    readonly organizationName: string;  //value not changeable
     firstName: string;
     middleName?: string;   //optional type (ekhon middle name na dileo hobe)
     lastName: string;
     isMarried: boolean;
 } = {
    organizationName: 'Programming Hero fire',
    firstName : 'Mezbahul',
    // middleName: 'Abedin',
    lastName: 'Forhan',
    isMarried: true,

}

console.log(user)

