/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

for (let i = 0; i < competitorPizzas.length; i++) {
  if (myPizzasT1[i] && !competitorPizzas[i].toLowerCase().includes(myPizzasT1[i].toLowerCase())) {
    resultUnique.push(myPizzasT1[i].toLowerCase());
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
}
for (let i = 0; i < competitorPizzas.length; i++) {
  if (myPizzasT2[i] && !competitorPizzas[i].toLowerCase().includes(myPizzasT2[i].toLowerCase())) {
    resultUnique.push(myPizzasT2[i].toLowerCase());
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
}
console.log(resultNull);
console.log(resultUnique);

export { resultNull, resultUnique };

//вар2
// for (let i = 0; i < competitorPizzas.length; i++) {
//   if (myPizzasT1[i] && competitorPizzas[i].toLowerCase() !== myPizzasT1[i].toLowerCase()) {
//     resultUnique.push(myPizzasT1[i].toLowerCase());
//   }
//   if (!resultUnique.length) {
//     resultNull = null;
//   }
// }
// for (let i = 0; i < competitorPizzas.length; i++) {
//   if (myPizzasT2[i] && competitorPizzas[i].toLowerCase() !== myPizzasT2[i].toLowerCase()) {
//     resultUnique.push(myPizzasT2[i].toLowerCase());
//   }
//   if (!resultUnique.length) {
//     resultNull = null;
//   }
// }

// console.log(resultNull);
// console.log(resultUnique);
// export { resultNull, resultUnique };
