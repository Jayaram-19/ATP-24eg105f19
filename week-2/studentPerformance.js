// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
// Tasks:
//     1. filter() students who passed (marks ≥ 40)
let f=students.filter(ele=>ele.marks>=40)
console.log(f)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
const studentsWithGrades=students.map(function(student){
  let grade;
  if(student.marks>=90)grade="A";
  else if(student.marks>=75)grade="B";
  else if(student.marks>=60) grade="C";
  else grade="D";
  return {
    id:student.id,
    name:student.name,
    marks:student.marks,
    grade:grade
  };
});
console.log("Students with Grades:",studentsWithGrades)
//    3. reduce() to calculate average marks
const averageMarks=students.reduce((total,student)=>total+student.marks,0)/students.length;
console.log("Average Marks:",averageMarks);
//    4. find() the student who scored 92
let findingStudent=students.find(student=>student.marks===92)
console.log("Student with 92 marks is",findingStudent)
//    5. findIndex() of student "Kiran"
let findingIndex=students.findIndex(student=>student.name==="Kiran")
console.log("Index of Kiran is",findingIndex)