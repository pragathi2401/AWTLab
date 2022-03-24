function* display()
{
    yield 1;
    console.log("Welcome");
    yield 2;
    yield 3;
    console.log("To");
    yield 4;
    console.log("CVR");
}
var d=display();
console.log(d);
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log("IT");
console.log(d.next());
