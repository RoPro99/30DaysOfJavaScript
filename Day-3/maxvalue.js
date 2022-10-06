const maxele=(num)=>{
    let mx=num[0];
   for(let i=0;i<num.length;i++){
       if(num[i]>mx){
           mx=num[i];
       }
   }
    return {mx};
}

//anoter
const maxele1=(num)=>{
    let mx1=num[0];
    for(const n of num){
        if(n>mx1){
            mx1=n;
        }
    }
    return {mx1};
}



const num =[1,2,5,8,9];
console.log(maxele(num));
console.log(maxele1(num));