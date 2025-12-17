

const getUser =(input:string | null)=>{
    if(input){
        // console.log("user found")
    }
    else{
        // console.log("user nai..Morce")
    }
}

getUser(null)

// unknown 


// const disCountCalculator =(input: unknown)=>{
  
//     if(typeof    input === 'number'){
//         const discountPrice = input * 10;
//         console.log(discountPrice)
//     }
//     else if(typeof input === 'string'){
//               const [discountPrice] = input.split(" ");
//             //   const discountPrice = input;
//                  const splitedPrice = Number(discountPrice) * 10;
//               console.log(splitedPrice)

//     }

// }


// disCountCalculator('25 tk')
// disCountCalculator(50)
// disCountCalculator(null)



// void
const throwError = (msg: string): never=>{
    throw new Error(msg)
}

throwError("Error.....")