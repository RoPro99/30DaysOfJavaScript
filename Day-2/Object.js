const goat={
    name:'Leo',
    club:'Barcelona',
    age:34
}
/// dot notation
console.log(goat.club);
console.log(goat.name);
console.log(goat.age);

///bracket notation
console.log(goat['club']);

///assign object
goat.goals=1454585;
console.log(goat.goals);

console.log(goat);

///execise
const person2={
    name1:'Qazi',
    shirt:'Black'
}
console.log(person2.name1);
console.log(person2.shirt);
console.log(person2);


//ex2
const intro=(Name,Shirt)=>{
    const guy={
        Name:Name,
        Shirt:Shirt,
        money:2000,
        dept:1500,
        networth: function(){
             return this.money-this.dept;
        }
    }
  const introd=`hi my name is ${guy.Name} ,i my lookig good in ${guy.Shirt}?
   I have only ${guy.networth()} rupees`;
  return introd;
}
console.log(intro('Rohan','Black'));