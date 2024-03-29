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


console.log('ARRAY Facile e medio');

const numbers = [];
const minNumber = 1;
const lengthArrayNumbers = 20;
const userNumber = 5;
while (numbers.length < lengthArrayNumbers) {

  const randomNumber = Math.floor(Math.random() * 100) + minNumber;

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

console.log('numeri pari', selectEvenNumbers(numbers))
console.log('numeri dispari', selectOddNumbers(numbers))
console.log('numeri divisibili per ', userNumber ,selectMultipleOf(numbers, userNumber))

function selectEvenNumbers(numbersArray) {
  const evenNumbers = [];
  
  for (let i = 0; i < numbersArray.length; i++) {
    let number = numbersArray[i]
    let rest = number % 2;

    if (rest === 0) {
      evenNumbers.push(number)
    }
  }
  return evenNumbers
}

function selectOddNumbers(numbersArray) {
  const oddNumbers = [];
  
  for (let i = 0; i < numbersArray.length; i++) {
    let number = numbersArray[i]
    let rest = number % 2;

    if (rest !== 0) {
      oddNumbers.push(number)
    }
  }
  return oddNumbers
}

function selectMultipleOf(numbersArray, number) {
  const multipleOf = [];
  const multipleOfThis = number;
  for (let i = 0; i < numbersArray.length; i++) {
    let number = numbersArray[i]
    let rest = number % multipleOfThis;

    if (rest === 0) {
      multipleOf.push(number)
    }
  }
  return multipleOf
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





























