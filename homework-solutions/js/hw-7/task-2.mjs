/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let resultIsPalindrom;

  if (typeof word !== 'string') {
    resultIsPalindrom = false;
  } else if (word === '') {
    resultIsPalindrom = true;
  } else {
    const arrPalindrom = word.split('');
    const reverseArrPalindrom = arrPalindrom.reverse();
    let strPalindrom = reverseArrPalindrom.join('');

    resultIsPalindrom = strPalindrom.toLowerCase() === word.toLowerCase() ? true : false;
  }
  return resultIsPalindrom;
}
console.log(isPalindrom('Madam'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const arrResult = [];

  // проверка на no-string и пустую строку
  if (typeof sentence !== 'string') {
    return arrResult;
  } else if (sentence === '') {
    return arrResult;
  }

  const arrSentence = sentence.trim().split(' ');

  // сортировка массива по убыванию
  arrSentence.sort(function sortArray(a, b) {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  });

  for (let i = 0; i < arrSentence.length; i++) {
    if (!arrResult.length) {
      arrResult.push(arrSentence[i]);
      // console.log(arrResult);
    } else if (arrSentence[i].length === arrResult[0].length) {
      arrResult.push(arrSentence[i]);
      // console.log(arrResult);
    } else if (arrSentence[i].length < arrResult[0].length) {
      break;
    }
  }
  return arrResult;
}
console.log(findLongestWords(' Bugfixes software always breaks fast     '));

export { isPalindrom, findLongestWords };

