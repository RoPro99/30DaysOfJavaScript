//1-->String
const name ='Jane';
const name2="Hello";
const name3=`Hi ,${name}`;//backticks
 console.log(name3);
 //if you want to know which data type it is
 console.log(typeof name3);

//2-->Number
const firstNum =5;
const secnum=0.15;

//Operation
const result = firstNum + secnum ;

console.log(result);
//we can combine a string and num it shoews Nan

//3-->Boolean
const isCool = false;
if(isCool){
    console.log("HI men You'r COOL");
}
else{
    console.log("hey men, You bullshit");
}
const age=20;
console.log(age>=20);
//4-->NULL
let x= null;
console.log(x);//default NULL
//5-->undefined
let x2;//not assign value in varaible
console.log(x2);
//6-->
const nameR ='Ron';
const age2 =22;
//object create
const Person ={
    nameR:'Ron',
    age2:22,
}
console.log(Person.nameR);
console.log(Person.age2);

const arr=[1,2,3,4,5];
