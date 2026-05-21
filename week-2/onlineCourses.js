// Assignment 2: Online Course Name Processor
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];
// Tasks:
//     1. filter() courses with name length > 5
let coursesLength=courses.filter(course=>course.length>5)
console.log("Couses length greater than 5 are",coursesLength)
//    2. map() to convert course names to uppercase
let uppercaseConversion=courses.map(course=>course.toUpperCase())
console.log("Courses in Uppercase are ",uppercaseConversion)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let stringConversion=uppercaseConversion.reduce((accumulator,course)=>(accumulator+" | "+course))
console.log("Converted into Single String is",stringConversion)
//     4. find() the course "react"
let finding=courses.find(course=>course==="react")
console.log("finding the course on react",finding)
//     5. findIndex() of "node"
let findingIndex=courses.findIndex(course=>course==="node")
console.log("Index of course Node ",findingIndex)