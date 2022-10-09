//type-1 map();
//ex1
[1,2,3,4,5].map(num=>console.log(num));
//ex2
let result =[2,4,6,8,10].map(num=>num+2);
console.log(result);
//ex3 function

const addmap=(num)=>{
    return num.map(num=>num+2);
}
console.log(addmap([1,2,3,4,5]));

///type-2 filter();
//ex2
const filter = (num1,gretherthen)=>{
    let res=[];
    for(nums of num1){
        if(nums>gretherthen){
            res.push(nums);
        }
    }
    return res;

}
console.log(filter([1,2,3,4,5],1));


//ex2 and syntax;
const n=[2,5,6,8,5,4,1];
let res=n.filter(n=>n<=6);
console.log(res);


//ex3
const goats=[
    {
        name:'Messi',
        Goals:100000
    },
    {
        name:'Ronaldo',
        Goals:1000
    },
    {
        name:'Xavi',
        Goals:10000
    }

]
let ans=goats.filter(goats=>goats.Goals>1000);
console.log(ans);

let ans2=goats.map(goats=>goats.name).join(',,')
console.log(ans2)


///type-3 Reduce
//ex1

const arr=[1,2,3,4];
// const total=arr.reduce(fucntion(prev, curr){
//     //return prev + curr
// })
//console.log(total);
///ex2
const arr2=[2,3,4,1];
const total1=arr2.reduce((pre,cur)=>pre+cur);
console.log(total1);


//ex3

const arr3=[1,2,3,4];
const total2=arr3.reduce((pr,cr)=>pr*cr);
console.log(total2);

//ex4
function sub(a,b){
    return a-b;
}
const arr4=[2,1,3,4];
const total3=arr4.reduce(sub);
console.log(total3);
