const numbers = [40, 20, 54, 1, 2, 10]
const frutits = ["Banana", "apple", "Cherry", "date"]


const sortNum = frutits.sort((a, b)=> a.localeCompare(b))
// const sortNum = numbers.sort((a, b)=> a - b)

// console.log(sortNum)

const arr = [1,2,3,4 , [5, 6, [20, 40, [30, 56]]]]

 const flatArr = arr.flat(Infinity)
// console.log(flatArr)

const tagFromPosts = [
    ["javascript", "node", "css"],
    ["react", "express", "node"],
    ["css", "mongodb"],

]
const  filterTags =  [...new Set(tagFromPosts.flat())]

console.log(filterTags)


// some
const currentRoles = ["user", "editor"];
const futureAccessRoles = ["admin", "manager"];
