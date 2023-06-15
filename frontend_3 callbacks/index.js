"use strict";
const numbersArr = [-3, -10, 0, 2, 4, 5, 6, 9, 37];

//la función de orden superior "filter" recibe un arr de números y los procesa con el segundo parámetro, que es una función callback. Si le pasamos isOdd retornará impares, si le pasamos isEven retornará pares. Pero también podríamos pasarle una función que retorne los positivos, los negativos, los que estén en un determinado rango... etc.
function filter(numbers, cb) {
  let result = [];
  for (const num of numbers) {
    if (cb(num)) result.push(num);
  }
  return result;
}

const isOdd = number => number % 2 !== 0; //retorna true si impar
const isEven = number => number % 2 === 0; //retorna true si par

console.log(filter(numbersArr, isEven)); //retorna arreglo de pares
console.log(filter(numbersArr, isOdd)); //retorna arreglo de impares

/**
 *
 * @param {*} a number 1
 * @param {*} b number 2
 * @param {*} cb callback
 * @returns result of operation determined by callback with params a and b
 */

function operation(a, b, cb) {
  return cb(a, b);
}
function sum(a, b) {
  return a + b;
}
console.log(operation(4, 6, sum));
