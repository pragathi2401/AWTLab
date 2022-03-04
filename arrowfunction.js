let emp = function (eid, ename, salary) {
  this.eid = eid,
  this.ename = ename,
  this.salary = salary,
  this.display = function () {
    setTimeout(() => {
      console.log("emp id " + this.eid + "getting " + this.salary);
    }, 1000);
  }
}
let emp1=new emp(1201,"XYZ",200000);
emp1.display();