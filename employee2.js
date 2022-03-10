let empname="Prashanthi";
let sal=50000;
let salary={ getSalary:()=>{
 return sal;
},
 setSalary:(newSal)=>{
    sal=newSal;
}
}
export default salary;