const { Console } = require('console');
const fs = require('fs');// common js

//Blocking, synchronous way
const textIn = fs.readFileSync('./test.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the file: ${textIn}.\nCreated on ${Date.UTC(2024)}`;

fs.writeFileSync('./writingTest.txt', textOut);//doesn't return any thing