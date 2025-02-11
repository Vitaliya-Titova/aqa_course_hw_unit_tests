/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
//variant1
let positiveNumber = 2;
let result;
result = positiveNumber + Number((String(positiveNumber))+(String(positiveNumber))) + Number((String(positiveNumber))+(String(positiveNumber))+(String(positiveNumber))); 
console.log(result);


//variant2
let positiveNumber2 = 4;
let result2;
result2 = positiveNumber2 + Number((""+ positiveNumber2 + ""+ positiveNumber2)) + Number((""+ positiveNumber2 + ""+ positiveNumber2 +""+ positiveNumber2))
console.log(result2);
