const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
employees.splice(1,0,{eno:106,name:"mani",marks:[90,98,96]})
console.log(employees)
// for(let i in employees){
// if(employees.name==="kiran"){
//  employees.splice(i,1)
// console.log(employees)
// }
// }


// const index=employees.findIndex(emp=>emp.name==="Kiran");
// if(index!==-1){
// employees.splice(index,1);
// }
// console.log(employees);



 employees.splice(4,1)
console.log(employees)

// const Sneha=employees.find(emp=>emp.name==="Sneha");
//  if(Sneha){
//  Sneha.marks[2]=75;
//  }
// console.log(employees);

employees.splice(3,1,{eno:103,name:"Sneha",marks:[88, 92, 75],})
console.log(employees)

