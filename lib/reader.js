'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFiles = (paths, callback) => {
  //read first file path data
  fs.readFile(paths[0], 'utf8', (error1, data1) => {
    if (error1) {
      return callback(error1);
    }
    callback(data1);
    //read second file path data
    return fs.readFile(paths[1], 'utf8', (error2, data2) => {
      if (error2) {
        return callback(error2);
      }
      callback(data2);
      return fs.readFile(paths[2], 'utf8', (error3, data3) => {
        if (error3) {
          return callback(error3);
        }
          callback(data3);
          return undefined;
      });
    });
  });
};


// fileReader.readFirstNCharactersAsync = (filePath, characters, callback) => {
//   console.log(`Reading ${filePath}`);

//   return fs.readFile(filePath, (error, fileBuffer) => {
//     if (error) {
//       throw error;
//     }
//     return callback(fileBuffer.toString('utf8', 0, characters));

//   });
// };

