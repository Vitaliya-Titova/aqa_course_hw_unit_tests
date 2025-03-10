/*
 Objective:
 Write a function that extracts specific properties from an object
 and returns a new object containing only those properties with their corresponding values.
*/
const user = {
  name: 'a',
  age: 2,
  channel: 'new',
  test: 'abc',
};

function getObjValues(user, arr) {
  const res = {};

  for (const key in user) {
    if (arr.includes(key)) {
      res[key] = user[key];
    }
  }
  return res;
}
console.log(getObjValues(user, ['name', 'age'])); // { name: 'a', age: 2 }

/**2
 * Create a function strCount (takes an object as argument)
 * that will count all string values inside an object. For example:
 */

strCount = {
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, '3', 4],
  fifth: 'null',
  tr: {
    dream: '32',
    trrty: {
      numtest: '66666666',
      arrtest: ['test'],
    },
  },
};
//returns 8

let count = 0;
function strCountinObject(strCount) {
  let newArr = Object.values(strCount).flat(Infinity);
  console.log(newArr);

  for (element of newArr) {
    if (typeof element === 'string') {
      count++;
    } else if (typeof element === 'object') {
      strCountinObject(element);
    }
  }
  return count;
}
console.log(strCountinObject(strCount));

/* 3
 * The function giveMeFive accepts 1 parameter, obj, which is an object.
 * Create an array (which you will eventually return).
 * Then, traverse obj, checking each key and value.
 * If the length of the key is equal to 5, then push the key to your array.
 * Separately, if the length of the value is equal to 5, then push the value to your array.
 * At the end, return your array.
 */

function giveMeFive(obj) {
  return Object.entries(obj)
    .flat(Infinity)
    .filter((element) => element.length === 5);
}

console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' })); // ["earth","world"]
console.log(giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' })); // ["Ihave","money","model"]
console.log(giveMeFive({ Pears: 'than', apple: 'sweet' })); //["Pears","apple","sweet"])
