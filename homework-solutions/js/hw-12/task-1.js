/*
1. Создайте функцию delayTwoSeconds, 
принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
 Обработайте промис методом .then и выведите результат его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. 
Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/
//1
function f() {
  let res = console.log('task 1: TimeOut 2');
  return res;
}

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => f());

//2
const p1 = new Promise((res) => {
  res(`task 2: ${1}`);
});
p1.then((res) => console.log(res));

//3
const p2 = new Promise((res, rej) => {
  rej('task 3: Promise failed');
});
p2.catch((rej) => console.error(rej));

//4
function promiseNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      resolve(`task 4: ${num}`);
    } else reject('task 4: not a number');
  });
}
promiseNumber(6)
  .then((res) => console.log(res))
  .catch((reject) => console.log(reject));

//5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([numOne, numTwo, numThree]) => {
    console.log(`task 5 ${numOne}`);
    console.log(`task 5 ${numTwo}`);
    console.log(`task 5 ${numThree}`);
  })
  .catch((rej) => console.log(rej));

//6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber('3')])
  .then(([numOne, numTwo, numThree]) => {
    console.log('task 6:', numOne);
    console.log('task 6:', numTwo);
    console.log('task 6:', numThree);
  })
  .catch((rej) => console.log(rej));

//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function allPr() {
  try {
    const [numOneAsync, numTwoAsync, numThreeAsync] = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    console.log('task 7_1:', numOneAsync);
    console.log('task 7_1:', numTwoAsync);
    console.log('task 7_1:', numThreeAsync);
  } catch (err) {
    console.log(err);
  }
}
allPr();

async function allSettledPr() {
  try {
    const [numOneAsync, numTwoAsync, numThreeAsync] = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber('test'),
    ]);
    console.log('task 7_2:', numOneAsync);
    console.log('task 7_2:', numTwoAsync);
    console.log('task 7_2:', numThreeAsync);
  } catch (err) {
    console.log(err);
  }
}
allSettledPr();
