import a from "./employee2.js"
let bonus=10000;
//document.write("Salary before bonus: "+getSalary());
// console.log(getSalary());
console.log("Salary before bonus: "+a.getSalary());
a.setSalary(a.getSalary()+bonus);
console.log("Salary after bonus: "+a.getSalary());



