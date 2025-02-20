/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'He-llo';
const letterVowels = 'aeiouyAEIOUY';
const letterConsonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
let vowels=0;
let consonants=0;
let noLetter ='0'
let vowelsAndConsonantsResult = '';

for (let i = 0; i < word.length; i++){
    if (letterVowels.includes(word[i])) {
        vowels = ++vowels
    } else if (letterConsonants.includes(word[i]))
     {consonants = ++consonants;}
     else (noLetter = ++noLetter)
};

vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`;
console.log (vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };

