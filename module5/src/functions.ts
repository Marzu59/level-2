

// function add(num1: number, num2: number){
//     const total = num1 + num2;
//     // console.log(total)
//  return total
// }

// add(2, 2)


// 
// const arrowAdd =(num1: number, num2:number): number=> num1 + num2;
// console.log(arrowAdd(2, 4))


const porUsr ={
    name: "mezbah",
    balance: 0,
    addBlance(value: number):number {
        const toatalBanlance = this.balance + value;
        return toatalBanlance;

    }
}


porUsr.addBlance(250)


const arr: number[] = [2,3,5,9];



const sqraArray = arr.map((elemnt: number ):number => elemnt * elemnt );
