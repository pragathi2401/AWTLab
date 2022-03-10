class Person{
    constructor(name)
    {
        this.name=name;
    }
    getName=()=>{
        return this.name;
    }
    setName=(newName)=>{
         name=newName;
    }
}
class Student extends Person{
    constructor(name,id)
    {
        super(name);
        this.id=id;
    }
    display()
    {
      console.log("Student name is : "+this.getName()+" and id is :"+this.id);   
    }
}
let s1=new Student("ABC",1280);
s1.display();