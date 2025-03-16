/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;  }*/

function getRandomArbitrary(max, min = 1) {
  return Math.round(Math.random() * (max - min) + min);
}
//var1 Closures
function uniqueRandomGenerator(n) {
  let resArr = [];
  let getrandomFun = getRandomArbitrary(n);

  return () => {
    if (n === 0 || typeof n !== 'number') {
      return 'All numbers were received';
    }

    if (resArr.length === n) {
      return 'All numbers were received';
    }

    while (resArr.includes(getrandomFun)) {
      getrandomFun = getRandomArbitrary(n);
    }
    resArr.push(getrandomFun);
    return getrandomFun;
  };
}

const func = uniqueRandomGenerator(3);
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

//var 2
function uniqueRandomGenerator2(n) {
  if (n === 0 || typeof n !== 'number') {
    return 'All numbers were received';
  }

  let getrandomFun2 = getRandomArbitrary(n);

  let resArr = [];

  while (resArr.length !== n) {
    if (resArr.includes(getrandomFun2)) {
      getrandomFun2 = getRandomArbitrary(n);
    } else {
      resArr.push(getrandomFun2);
      console.log(getrandomFun2);
    }
  }
  return 'All numbers were received';
}

const randomGenerator = uniqueRandomGenerator2(5);
console.log(randomGenerator);
console.log(randomGenerator);
console.log(randomGenerator);

export { uniqueRandomGenerator };
