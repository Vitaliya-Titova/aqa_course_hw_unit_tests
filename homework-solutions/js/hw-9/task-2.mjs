/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

/*1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
Объект должен иметь поля name (string) и age (number) */
const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    return characters.push(character);
  } else throw new Error('Invalid data type');
}
addCharacter({ name: 'Vita', age: 31 });

//2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
  const findName = characters.find((user) => user.name === name);
  return findName;
}
console.log(getCharacter('Jack'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge
// getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
  if (typeof minAge === 'number') {
    return characters.filter((character) => character.age >= minAge);
  } else throw new Error('Minage is not a number');
}
console.log(getCharactersByAge(40));

//4. Напишите функцию updateCharacter(name, newCharacter).
//(Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
  const findCharacter = getCharacter(name);
  findCharacter.name = newCharacter.name;
  findCharacter.age = newCharacter.age;
  return findCharacter;
}
updateCharacter('Jack', { name: 'New_name', age: 5 });

// 5. Напишите функцию для удаления персонажа removeCharacter(name)
// (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
  let indexCharacter = characters.findIndex((element) => element.name === name);
  if (indexCharacter >= 0) {
    return characters.splice(indexCharacter, 1);
  } else throw new Error('Existing Name is required');
}
removeCharacter('New_name');
console.log(characters);

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
