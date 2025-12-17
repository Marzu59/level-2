


const biyerJonnoEligible = (age: number)=>{
   
  const result = age >=21  ? "you are eligible" : "Bacca pola vhago ekhan theke!";
    return result; 

}
// console.log(biyerJonnoEligible(22))

// nullish ??

const usertheme = null;
const selectedTheme = usertheme ?? "light theme";
// console.log(selectedTheme)

// const fdf = "";
// const resultWithnalllish = fdf ?? "you are guest!"
// console.log({resultWithnalllish})