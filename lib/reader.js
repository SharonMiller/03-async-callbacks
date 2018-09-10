'use strict';

const fs = require('fs');

const reader = module.exports = {};


reader.readFiles = (paths, callback) => {
  //read first file path data
  fs.readFile(paths[0], 'utf8', (error, data1) => {
    if (error) {
      return callback(error);
    }
    callback(undefined, data1.toString().trim()); 
    //read second file path data
    return fs.readFile(paths[1], 'utf8', (error, data2) => {
      if (error) {
        return callback(error);
      }
      callback(undefined, data2.toString().trim()); 
      //read third file path data
      return fs.readFile(paths[2], 'utf8', (error, data3) => {
        if (error) {
          return callback(error);
        }
          callback(undefined, data3.toString().trim());  
      });
    });
  });
};

// 'use strict';

// const fs = require('fs');

// // Wrap the fs.readFile method with our interface so that we can properly test it modularly.
// module.exports = exports = (file, callback) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { callback(err); }
//     else { callback(undefined, data.toString().trim()); }
//   });
// };



// fileReader.readFirstNCharactersAsync = (filePath, characters, callback) => {
//   console.log(`Reading ${filePath}`);

//   return fs.readFile(filePath, (error, fileBuffer) => {
//     if (error) {
//       throw error;
//     }
//     return callback(fileBuffer.toString('utf8', 0, characters));

//   });
// };

