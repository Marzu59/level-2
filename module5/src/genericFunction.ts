// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrayWithGeneric = <T> (value: T )=>{
    return [value]
}

const arrString = createArrayWithGeneric("apple")
const arrnum = createArrayWithGeneric(22);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next  Level"
})




// tuple

// const createArrayWithTuple = (param1: string, param2: string) => [
//   param1,
//   param2,
// ];



const   createArrayWithTample = <X, Y> (parm1:X, parm2:Y)=> [parm1, parm2 ] ;


const rs1 = createArrayWithTample("Mezbah", false);
const rs2 = createArrayWithTample(222, {name: "Mezbah"})







const addStudentToCourse= <T> (studentinfo: T)=>{
    return {
        course:"next",
        ...studentinfo
    }
}




const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};


const result = addStudentToCourse(student1)
const result2 = addStudentToCourse(student2)
console.log(result2)



