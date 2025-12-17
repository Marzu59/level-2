// Generate a lookup table

// Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookUptable = postsArray.reduce((table, post)=>{
   table[post.id] = post
   return table

}, {})
// console.log(lookUptable)

// const post = postsArray.find(post=> post.id === "p-104")

// another good way

const post = lookUptable["p-103"]

// console.log(post)

for(let post in lookUptable){
    // console.log(lookUptable[post])
}












// Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }
