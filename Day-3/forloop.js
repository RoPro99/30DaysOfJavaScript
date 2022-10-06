//Basic(not recommended)
const names=['R','S','P','K','N'];
for(let i=0;i<names.length;i++){
    //console.log(names[i]);
}

///New For loop
const goats=['L','I','X','B','V'];
for(const goat of goats){
    console.log(goat);
}


///number

// const no=[1,2,3,4,5,6];
// for(const n of no){
//     console.log(2*n);
//     result.push(2*n);
// }
// console.log(result);


const twotimes =(no)=>{
    let result=[];
    for(const n of no){
        //console.log(2*n);
        result.push(n**2);
    }
    return result;
}
console.log(twotimes([1,2,3,4,5]))

