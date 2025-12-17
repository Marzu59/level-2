// constrain-jor kore rulse set kore dewa


type Student = {
    id: number; name: string;
}

const addStudentToCourse = <T extends Student > (studentinfo: T)=>{
    
    return {
        course: "Next Level",
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



const rs1 = addStudentToCourse(student2)

console.log(rs1)