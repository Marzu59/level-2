
const kgToGconvert = (input: string | number): string | number | undefined =>{
     if (typeof input === "number") {
        return input * 1000;
    }
    else if(typeof input === 'string'){
         const [value] = input.split(" ");

         return `Converted output is: ${Number(value) * 1000}`;
    }

}

const result = kgToGconvert(2) as number;
console.log({result})
const result2 = kgToGconvert('5 kg') as string;
console.log({result2})