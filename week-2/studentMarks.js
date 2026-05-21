// Assignment 3: Student Marks List
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let greaterMarks=marks.filter(mark=>mark>=40)
console.log("Marks greater than 40 are",greaterMarks)
//     2. map() to add 5 grace marks to each student
let graceMarks=marks.map(mark=>mark+5)
console.log("Grace Marks are",graceMarks)
//     3. reduce() to find highest mark
let highestMark=marks.reduce((accumulator,mark)=>(accumulator>mark)?accumulator:mark)
console.log("Highest Marks is",highestMark)
//     4. find() first mark below 40
let firstMarkAbove=marks.find(mark=>mark<40,0)
console.log("First mark after 40 is",firstMarkAbove)
//     5. findIndex() of mark 92
let findingIndex=marks.findIndex(mark=>mark===92)
console.log("Index of 92 marks is",findingIndex)