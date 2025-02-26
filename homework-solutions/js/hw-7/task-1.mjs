/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...array) {
  array = [].concat(...array);
  return array;
}
//вариант 2
// function mergeArrays2() {
//   const array = [].concat(...arguments);
//   return array;
// }
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
const word1 = 'Вот такой вот вид';
const word2 = 'I am super engineer';
const word3 = '';
const word4 = '`i Am auto       TESTER';

function devideBy(sentence) {
  if (sentence === '') {
    return (sentence = '');
  } else {
    const arrSentence = sentence.replace(/\s+/g, ' ').trim().split(' ');
    const newArray = [];

    arrSentence[0] = arrSentence[0][0].toLowerCase() + arrSentence[0].slice(1).toLowerCase();
    newArray.push(arrSentence[0]);
    for (let i = 1; i < arrSentence.length; i++) {
      arrSentence[i] = arrSentence[i][0].toUpperCase() + arrSentence[i].slice(1).toLowerCase();
      newArray.push(arrSentence[i]);
    }
    let newArrayToString = newArray.join('_');
    return newArrayToString;
  }
}
console.log(devideBy(word3));
console.log(devideBy(word1));
console.log(devideBy(word2));
console.log(devideBy(word4));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
     f(n) = f(n-1) + f(n-2)
  */

function fibonacci(n) {
  let arrResult = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      arrResult.push(i);
      continue;
    } else if (i > 1) {
      arrResult.push(arrResult[i - 1] + arrResult[i - 2]);
    }
  }
  let fibNumber = arrResult.pop();
  return fibNumber;
}
console.log(fibonacci(60));

export { mergeArrays, devideBy, fibonacci };
