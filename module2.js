// const obj = {
//     nextLevel: { courseId: "level2"},
//     "p h": {courseId: "level1"}
// }



// console.log(obj["p h"])

const course1 = {name: "programming hero"}
const course2 = {name: "next level web development"}

const obj = {}
// obj.crs = { courseid: 'New dev'}
// console.log(obj)
// obj[course2]= {courseId: "level2"}
// obj[course1]= {courseId: "level1"}

// console.log(obj)
const courses = [
    [course1, "level1"],
    [course2, "level2"]
];

const map = new Map(courses)
// map.set(course1, {courseId: "levl1"})
// map.set(course2, {courseId: "level2"});


// map.clear()
// map.delete(course1)

// map.forEach((value, key)=>(key.name= "sohoj sorol simple " + key.name ))

// for(let key of  map.keys()){
//     console.log(key)
// }



console.log(map)