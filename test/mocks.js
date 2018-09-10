'use strict';

module.exports = exports = {};


exports.readFile = (file, callback) => {
  let string = 'Mocked File';
  if(file.match(/bad/i)) {
    callback('Not A File');
  } else {
    callback(undefined, Buffer.alloc(string.length, string));
  }
};