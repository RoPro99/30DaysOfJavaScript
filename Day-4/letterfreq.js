const letterfreq=(pharse)=>{
    let frq={};
    for(const letter of pharse){
        if(letter in frq){
            frq[letter]++;
        }
        else{
            frq[letter]=1;
        }
    }
    return frq;
}
const userinput=prompt('What is your sentence')
console.log(letterfreq(userinput));