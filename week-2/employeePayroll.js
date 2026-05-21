
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// Tasks:
//     1. filter() employees from IT department
let filteringEmployees=employees.filter(employee=>employee.department==="IT")
console.log("Employees in IT Department are",filteringEmployees)
//     2. map() to add:
//             netSalary = salary + 10% bonus
const employeesWithNetSalary=employees.map(employee=>{
return {
employee,
netSalary:employee.salary+(employee.salary*0.1)
}
})
console.log("Employees with netsalary",employeesWithNetSalary)
//     3. reduce() to calculate total salary payout
let totalSalaryPayout=employees.reduce((sum,employee)=>sum+employee.salary,0)
console.log("Total Salary Payout is ",totalSalaryPayout)
//     4. find() employee with salary 30000
let findingEmployee=employees.find(employee=>employee.salary===30000)
console.log("Employee with salary 30000",findingEmployee)
//    5. findIndex() of employee "Neha"
let findingIndexOfEmployee=employees.findIndex(employee=>employee.name==="Neha")
console.log("Index of Neha is",findingIndexOfEmployee)