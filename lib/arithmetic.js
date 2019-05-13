'use strict';

let arithmetic = module.exports = {};

function checkNumber(num){
  if( typeof num !== 'number' ) { return null; }
}

arithmetic.add = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    checkNumber(arr[i]);
    sum = sum + arr[i];
  }
  return sum;
};

arithmetic.subtract = function(arr) {
  let difference = arr[0];
  checkNumber(difference);
  for(let  i = 1; i < arr.length; i++){
    checkNumber(arr[i]);
    difference = difference - arr[i];
  }
  return difference;
};

arithmetic.multiply = function(arr) {
  let product = 1;
  for(let i = 0; i < arr.length; i++){
    checkNumber(arr[i]);
    product  = product * arr[i];
  }
  return product;
};

arithmetic.divide = function(a,b) {
  if( typeof a !=='number' || typeof b !== 'number') { return null; }
  if( a === 0 || b === 0) { return null; }
  return a/b;
};