food=Number(prompt('How Much for food'));
tippercent=Number(prompt('Whats your tip')/100);
tipamount=food*tippercent;
console.log('Tip:',tipamount);
//alert(tipamount);
total_amount=food+tipamount;
console.log('Total:',total_amount);