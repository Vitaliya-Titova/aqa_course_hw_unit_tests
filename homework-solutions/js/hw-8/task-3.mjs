/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример:  //4
*/
const arr = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(numbers) {
  const sortArr = [...numbers];

  sortArr.sort((a, b) => a - b);

  let result = sortArr.find((number, index) => number !== index + 1);
  return typeof result === 'number' ? result - 1 : sortArr[sortArr.length - 1] + 1;
}

console.log(findMissingNumber(arr));

export { findMissingNumber };
