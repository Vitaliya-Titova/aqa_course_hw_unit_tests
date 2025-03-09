/*
 Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
 1. Создать массив из ключей объекта character и присвоить его в переменную "keyWithFourChars" т.е., где 4 буквы //name, isQa
 2. Создать массив из значений объекта character и присвоить его в переменную "stringValues" е, где тип данных строка //'Barney', 'male'
 3. Создать массив из ключей и значений объекта character и присвоить его в переменную "keyValuePairs", перебрать массив циклом for. 
   На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
 4. Проверить, есть ли в объекте ключ salary, результат присвоить в переменные "hasSalaryKey1stOption | hasSalaryKey2ndOption"
   (Реализовать 2мя способами: через оператор "in" (1st) и "Object.hasOwn()" (2nd))
*/
const character = { name: 'Barney', age: 36, gender: 'male', isQa: true };

//1. Создать массив из ключей объекта character и присвоить его в переменную "keyWithFourChars" т.е., где 4 буквы //name, isQa
let keyWithFourChars = Object.keys(character).filter((element) => element.length === 4);
console.log(keyWithFourChars);

// 2. Создать массив из значений объекта character и присвоить его в переменную "stringValues" е, где тип данных строка //'Barney', 'male'
let stringValues = Object.values(character).filter((element) => typeof element == 'string');
console.log(stringValues);

// 3
/* Do not touch this part */
const logSpy = jest.spyOn(console, 'log');
// ---

// 3 Создать массив из ключей и значений объекта character и присвоить его в переменную "keyValuePairs",
// перебрать массив циклом for.  На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
let keyValuePairs = Object.entries(character);
for (const [key, value] of keyValuePairs) {
  console.log(`key = ${key}, value = ${value}`);
}

//var2
let keyValuePairs2 = Object.entries(character).forEach(([key, value]) => {
  console.log(`key2 = ${key}, value2 = ${value}`);
});

// 4 Проверить, есть ли в объекте ключ salary, результат присвоить в переменные "hasSalaryKey1stOption | hasSalaryKey2ndOption"
// (Реализовать 2мя способами: через оператор "in" (1st) и "Object.hasOwn()" (2nd))
let hasSalaryKey1stOption = 'salary' in character;
console.log(hasSalaryKey1stOption);
let hasSalaryKey2ndOption = Object.hasOwn('salary');
console.log(hasSalaryKey2ndOption);

export { keyWithFourChars, stringValues, hasSalaryKey1stOption, hasSalaryKey2ndOption, keyValuePairs, logSpy};
