'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('All math functions', () => {
  it('adding should return null if arguments are not numbers', () => {
    let notNumber = arithmetic.add(['hello', 1, 2, 3]);
    expect(notNumber).toBeNull();
  });
  it('adding an array of numbers will sum up the total value', () => {
    let notNumber = arithmetic.add([1,2,3,4,5]);
    expect(notNumber).toStrictEqual(15);
  });
  it('subtracting should return null if arguments are not numbers', () => {
    let notNumber = arithmetic.subtract(['hello', 1, 2, 3]);
    expect(notNumber).toBeNull();
  });
  it('subtracting an array of numbers will subtract all the numbers', () => {
    let notNumber = arithmetic.subtract([1,2,3,4,5]);
    expect(notNumber).toStrictEqual(-13);
  });
  it('multiplying should return null if arguments are not numbers', () => {
    let notNumber = arithmetic.multiply(['hello', 1, 2, 3]);
    expect(notNumber).toBeNull();
  });
  it('multiplying an array of numbers will return the product', () => {
    let notNumber = arithmetic.multiply([1,2,3,4,5]);
    expect(notNumber).toStrictEqual(120);
  });
  it('dividing should return null if arguments are not numbers', () => {
    let notNumber = arithmetic.divide(['hello', 1, 2, 3]);
    expect(notNumber).toBeNull();
  });
  it('dividing by zero should return null', () => {
    let notNumber = arithmetic.divide(0,1);
    expect(notNumber).toBeNull();
  });
  it('dividing two numbers will return he quotient', () => {
    let notNumber = arithmetic.divide(6,3);
    expect(notNumber).toStrictEqual(2);
  });
});