
//innerText ->>TO change the inner text

let title=document.getElementById('title');
console.log(title.innerText);
title.innerText='Good Bye!!';


//innerHTML-->To Change the inner html

let message='love you javascript';
title.innerHTML=`i love ${message} world`;

title.style.color='blue';
title.style.backgroundColor='orange';

///redyellow game

let redDiv=document.getElementById('red');
let yellowDiv=document.getElementById('yellow');
let oraDiv=document.getElementById('orange');

//onclick
redDiv.onclick = ()=> console.log('Boom Its  Red');
yellowDiv.onclick =()=> console.log('Boom its Yellow');
oraDiv.onclick= () =>console.log('Boom its Orange');


