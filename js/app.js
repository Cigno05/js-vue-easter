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

const numeri = [];
const pari = [];
const max = 50;
const min = 1;

while (numeri.length < max) {

  const randomNumber = Math.floor(Math.random() * max) + min;

  let presente = false;

  for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] === randomNumber) {
      presente = true
    }
  }

  if (presente === false) {
    numeri.push(randomNumber)
  }

}

for (let i = 0; i < numeri.length; i++) {
  let numeroCor = numeri[i]
  let rest = numeroCor % 2;

  if(rest === 0) {
    pari.push(numeroCor)
  }
}


console.log(pari)

// short solution
const numeriPari = numeri.filter((num) => num % 2 === 0);

console.log(numeriPari)

console.log('Stringa infinita Difficile');

const infinityString = 'abcdefghijklmnopqrstuvwxyz';

console.log(selectInToTheString(infinityString, 5, 10))


function selectInToTheString(string, start, end) {
  
  const stringSelect = [];

  for(index = start; index < end; index++) {
    const selected = string[index]
    stringSelect.push(selected)
  }
  return stringSelect.join('')
}


































