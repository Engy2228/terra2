const str = 'Одинарные кавычки тоже подойдут'
const countLetter = {}

for (let letter of str) {
  letter = letter.toLowerCase()
  countLetter[letter] = (countLetter[letter] || 0) + 1

}

let bestLetter = ''
let maxCount = 0

for (let letter in countLetter) {
  if (countLetter[letter] > maxCount) {
    maxCount = countLetter[letter]
    bestLetter = letter
  }
}

alert(`Самая частая буква: ${bestLetter}, количество: ${maxCount}`);


/*
const str2 = 'Одинарные кавычки тоже подойдут';
const charCount = {};

for (let char of str2) {
  char = char.toLowerCase();
  charCount[char] = (charCount[char] || 0) + 1; // наглядно
  console.log(`charCount после "${char}":`, charCount);
}
*/
