import {getSalary,setSalary} from "./employee.js"
let bonus=5000;
//document.write("Salary before bonus: "+getSalary());
//console.log(getSalary());
console.log("Salary before bonus: "+getSalary());
setSalary(getSalary()+bonus);
console.log("Salary after bonus: "+getSalary());



