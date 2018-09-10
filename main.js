// 'use strict';

// const fileReader = require('./lib/reader');

// const data1 = `${__dirname}/data/mydata1.txt`;
// const data2 = `${__dirname}/data/mydata2.txt`;
// const data3 = `${__dirname}/data/mydata3.txt`;

// const printCharacters = (characters) => {
//   console.log(characters);
//   console.log('----------------------');
// };
// const CHARACTERS = 256; //this is the number of characters to read if file is huge

// try {
//   // fileReader.readFirstNCharactersAsync(data2, CHARACTERS,
//   //   (datatwo) => {
//   //     printCharacters(datatwo);
//   //   });
//   // fileReader.readFirstNCharactersAsync(data1, CHARACTERS,
//   //   (dataone) => {
//   //     printCharacters(dataone);
//   //   });
//   // fileReader.readFirstNCharactersAsync(data3, CHARACTERS,
//   //   (datathree) => {
//   //     printCharacters(datathree);
//   //   });

//   ///get files to read in order
//   // fileReader.readFirstNCharactersAsync(data2, CHARACTERS,
//   //   (datatwo) => {
//   //     printCharacters(datatwo);
//   //     fileReader.readFirstNCharactersAsync(data1, CHARACTERS,
//   //       (dataone) => {
//   //         printCharacters(dataone);
//   //         fileReader.readFirstNCharactersAsync(data3, CHARACTERS,
//   //           (datathree) => {
//   //             printCharacters(datathree);
//   //           });

//   //       });

//   //   });


// } catch (error) {
//   console.log('My ERROR', error);
// }

// const dataArray = [data1, data2, data3];
// //callback will be eecuted once I finish all my async operations
// const readFileArrayAsync = (fileArray, currentIndex, callback) => {
//   if (currentIndex >= fileArray.length) {
//     //returning callback's execution, not just callback
//     return callback();
//   }
//   const currentFilepath = dataArray[currentIndex];
//   try {
//     return fileReader.readFirstNCharactersAsync(currentFilepath, CHARACTERS, (file) => {
//       printCharacters(file); 
//       readFileArrayAsync(dataArray, currentIndex + 1, callback);
//     });

//   } catch (error) {
//     console.log('error in readfilearraysync');
//   }
// };

// readFileArrayAsync(dataArray, 0, () => {
//   console.log('we have read all files')
// });

// //this is not recursive becaue it is seding it to the v8 engine to be processed in the callback queue. 