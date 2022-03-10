class emp{
    static display(){
        console.log("Hi from Parent Class");
    }
}
class emp1 extends emp{
    display1(){
        console.log("Hello from child class");
    }
}
emp.display();
let e1=new emp1();
console.log("Display from child class : ");
emp1.display();
e1.display1();
