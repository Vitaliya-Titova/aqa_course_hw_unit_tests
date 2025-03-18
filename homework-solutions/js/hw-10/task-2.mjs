/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
function countOccurrences(arr) {
  let result = {};

  for (const elem of arr) {
    if (result[elem]) {
      result[elem] = result[elem] + 1;
    } else result[elem] = 1;
  }
  return result;
}
console.log(countOccurrences(numbers));

export { countOccurrences };
