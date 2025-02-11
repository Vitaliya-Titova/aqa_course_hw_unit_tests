/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
//variant1
let positiveNumber1 = 2;
let result1;

result1 = positiveNumber1 
    + Number(("" + positiveNumber1 + "" + positiveNumber1)) 
    + Number(("" + positiveNumber1 + "" + positiveNumber1 + "" + positiveNumber1));
console.log(result1);

//variant2

let positiveNumber2 = 2;
let stringNumber = String(positiveNumber2);
let result2;

result2 = positiveNumber2 
+ Number(stringNumber + stringNumber) + Number(stringNumber + stringNumber + stringNumber); 
console.log(result2);

//variant3
let positiveNumber3 = 2;
let result3;

result3 = positiveNumber3 
+ +(("" + positiveNumber3 + "" + positiveNumber3)) 
+ +(("" + positiveNumber3 + "" + positiveNumber3 + "" + positiveNumber3));
console.log(result3);

//variant4
let positiveNumber4 = 2;
let result4;

result4 = positiveNumber4 
+ +("".concat(positiveNumber4, positiveNumber4))
+ +("".concat(positiveNumber4, positiveNumber4, positiveNumber4));;
console.log(result4);
console.log(typeof(result4));
