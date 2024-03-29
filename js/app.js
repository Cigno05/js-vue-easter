console.log('JS funziona');

// const { createApp } = Vue

// createApp({
//   data() {
//     return {

//     }
//   },
//   methods: {

//   },

// }).mount('#app')


console.log('ARRAY Facile');

const numbers = [];
const minNumber = 1;
const maxNumber = 20;
while (numbers.length < maxNumber) {

  const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;

  let thereIs = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === randomNumber) {
      thereIs = true
    }
  }

  if (thereIs === false) {
    numbers.push(randomNumber)
  }

}
console.log(numbers)

console.log(selectEvenNumbers(numbers))

function selectEvenNumbers(numberArray) {
  const evenNumbers = [];
  
  for (let i = 0; i < numberArray.length; i++) {
    let numeroCor = numberArray[i]
    let rest = numeroCor % 2;

    if (rest === 0) {
      evenNumbers.push(numeroCor)
    }
  }
  return evenNumbers
}



// short solution
// const pari = numeri.filter((num) => num % 2 === 0);

// console.log(pari)

console.log('Stringa infinita - Difficile');

const infinityString = 'abcdefghijklmnopqrstuvwxyz';

console.log(selectInToTheString(infinityString, 5, 10))


function selectInToTheString(string, start, end) {

  const stringSelect = [];

  for (index = start; index < end; index++) {
    const selected = string[index]
    stringSelect.push(selected)
  }
  return stringSelect.join('')
}

console.log('Cifrario - Facile')

const userWord = 'pAolo';

console.log(butterflyWordCreator(userWord))

function butterflyWordCreator(word) {

  const butterflyWord = [];


  for (let index = 0; index < word.length; index++) {
    const letter = word[index];


    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
      butterflyWord.push(letter, 'f', letter)
    } else {
      butterflyWord.push(letter)
    }
  }
  return butterflyWord.join('')
}





























