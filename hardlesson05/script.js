"use strict";
let arr = [];
arr[0] = '123';
arr[1] = '234';
arr[2] = '456';
arr[3] = '789';
arr[4] = '254';
arr[5] = '4234';
arr[6] = '2666234';

function Condition(str) {
  if (str.charAt() === "2" || str.charAt() === "4") {
    console.log(str);
  }
}
for (let i = 0; i < 7; i++) {
  Condition(String(arr[i]));
}



let n = 100;
for (let i = 2; i <= n; i++) {
  let del=1;
  for (let j = 2; (j <= i/2)&&(del===1); j++) {
     if (i%j===0) {
         del=0;}
    }
 
 if (del===1) {
   console.log(i+ ' Делители этого числа: 1 и ' + i);
  }
}
