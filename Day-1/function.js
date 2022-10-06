function saymyname(){
    console.log('Rohan')
}
saymyname();

//Dynamic function
function sayname(name){
    console.log(name);
}
sayname('Shruti');

///template literals
function greeting(name){
    greet=`hi ${name},Nice to meet you`;
    console.log(greet);
}
greeting('Shru');

//Function with many argument
function sum(a,b){
    let c=a+b;
    console.log(c);
}
sum(3,2);

//function with return
function sum1(a,b){
    return a+b; 
}
console.log(sum1(2,2));

//function with arrow
const myclub=(name)=>{
    console.log(name);
}
myclub('FC Barcelona');

//function wit arrow type2
const myclub2=(name)=>name;
console.log(myclub2('FCB'));