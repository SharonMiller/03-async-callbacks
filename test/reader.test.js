'use strict';

const fileReader = require('../lib/reader');
const fs = require('fs');
console.log(__dirname);

const files = [
  `${__dirname}../data/mydata1.txt`,
  `${__dirname}../data/mydata2.txt`,
  `${__dirname}../data/mydata3.txt`,
];
console.log(files);

const badFiles =[
    `${__dirname}../data/mydata1.txt`,
    `${__dirname}../data/mydata2.txt`,
    `${__dirname}../data/mydata3.txt`,
  ];