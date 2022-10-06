const howmanyletters=(pharse)=>{
    
    let result=0;
    for(const index in pharse){
        result = Number(index)+1;
        
    }
    return {result};

}
let pharse=prompt('Write pharse to count'); 
console.log(howmanyletters(pharse));