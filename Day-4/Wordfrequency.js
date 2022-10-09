
const Wordfrequency=(pharse)=>{
    let frq={};
     array=pharse.split(' ');
    for(const word of array){
        console.log(word);
        if(word in frq){
            frq[word]++;
        }
        else{
            frq[word]=1;
        }
    }
    return frq;
}

console.log(Wordfrequency('lol what is lol what'));