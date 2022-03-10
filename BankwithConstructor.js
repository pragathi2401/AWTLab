class Bank{
    static name="HDFC";
    constructor(branch)
    {
       this.branch=branch;
    }
    display(){
        console.log("Bank name is: "+Bank.name+" and branch is : "+this.branch);
    }
}
let b1=new Bank("Dilshuknagar");
let b2=new Bank("Karmanghat");
let b3= new Bank("Vansathalipuram");
b1.display();
b2.display();
b3.display();