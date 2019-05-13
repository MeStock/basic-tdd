'use strict';

const message = module.exports = {};

message.sayHello = function(string){
  if( typeof string !== 'string' ){ return null; }
  let response = `hello ${string}`;
  return response;
};