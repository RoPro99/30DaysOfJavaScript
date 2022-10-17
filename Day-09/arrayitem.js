const randomDigit=(digit)=>{
    let randomno=Math.floor(Math.random()*digit.length);
    return digit[randomno];

}
let digit=[1,2,3,4,5,6];
//console.log(randomDigit(digit));


const weatherScore= (weather) =>{
    
    if(weather=='rainy'){
        console.log('1');
    }
    else if(weather=='sunny'){
        console.log('-1');
    }
    else{
        console.log('0');
    }
    
}
let weather=['rainy','sunny','overcast'];
weatherScore(weather='overcast');

