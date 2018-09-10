'use strict';

jest.mock('fs');

const fileReader = require('../lib/reader');
const fs = require('fs');
// console.log(__dirname);


const file1 = `${__dirname}/../data/mydata1.txt`;
const file2 = `${__dirname}/../data/mydata2.txt`;
const file3 = `${__dirname}/../data/mydata3.txt`;
const badFile = `${__dirname}/../data/badfile`;

let files = [file1, file2, file3];
console.log(files[1]);

describe('file reader module tests', () => {
  test('should throw an error if a file is bad', () => {
    fileReader.readFiles([file1, file2, badFile], (error, result) => {
      expect(error).toBeDefined();
    });  
  });
  test('should make array with the strings from each file', () => {
    fileReader.readFiles([file1, file2, file3], (error, data) => {
      expect(typeof data).toEqual('string');
    });
  });
});