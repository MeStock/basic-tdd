'use strict';

const greet = require('../lib/greet.js');

describe('The greet function', () => {
  it('should return null if the input is not of string type', () => {
    let message = greet.sayHello([1,2,3]);
    expect(message).toBeNull;
  });
  it('will return a greeting if a string is inputed', () => {
    let message = greet.sayHello('world');
    expect(message).toStrictEqual('hello world');
  });
});
