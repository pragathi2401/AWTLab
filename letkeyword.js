for(let i=0;i<10;i++)
{
  setTimeout(()=>
    console.log("i value ",i),1000);
}
const fruits=["apple","mango"];
console.log(fruits[0]);
fruits[0]="banana";
console.log(fruits[0]);
console.log(fruits);
fruits.push("apple");
console.log(fruits);
console.log(fruits.pop());