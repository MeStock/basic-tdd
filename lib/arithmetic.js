'use strict';

let arithmetic = module.exports = {};


arithmetic.add = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if( typeof arr[i] !== 'number' ) { return null; }
    sum = sum + arr[i];
  }
  return sum;
};

arithmetic.subtract = function(arr) {
  let difference = arr[0];
  for(let i = 1; i < arr.length; i++){
    if( typeof arr[i] !== 'number' || typeof arr[0] !== 'number') { return null; }
    difference = difference - arr[i];
  }
  return difference;
};

arithmetic.multiply = function(arr) {
  let product = 1;
  for(let i = 0; i < arr.length; i++){
    if( typeof arr[i] !== 'number' ) { return null; }
    product  = product * arr[i];
  }
  return product;
};

arithmetic.divide = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  if( a === 0 || b === 0 ) { return null; }
  return a/b;
};