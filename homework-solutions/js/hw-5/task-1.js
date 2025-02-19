/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';

for (let i = 10; i>= 0; i--){
  if (i % 2 === 0 && i!==0 ){
    evenNumbersResult = evenNumbersResult + i + '-'
}; 
if ( i === 0 ) {
  evenNumbersResult = evenNumbersResult + 0 
} 
};
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let smileValue= ":)";
let concatSmileValue = '';

for (let i = 1; i<=5; i++){
  for (let j = 1; j <=1; j++){
    concatSmileValue = smileValue + concatSmileValue 
      } 
  if (i <= 4){smilePatternResult = smilePatternResult + concatSmileValue +'\n';
    } 
  else { smilePatternResult  = smilePatternResult + concatSmileValue
 }
}
console.log(smilePatternResult);

/*вар 2 - эксперимент с repeat >> method returns a string with a number of copies of a string
for (let i = 1; i<=5; i++){
  if (i<=4){
    smilePatternResult += smileValue.repeat(i) +'\n';
} else {smilePatternResult += smileValue.repeat(i)}
}
console.log(smilePatternResult)
*/

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replaceAll(" ","1")
console.log(replaceSpacesWithOneResult)


export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
