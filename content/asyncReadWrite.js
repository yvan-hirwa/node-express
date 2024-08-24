const fs = require('fs');

//using Non-Blocking async to read and write files in node

fs.readFile('./test.txt','utf-8', (err, data) => { 
    if (err) return err;

    const text = data; //reads data and displays it
    console.log(text);

    fs.writeFile('./asyncWrite.txt', text,'utf-8', err =>{
        if (err) return err;
        console.log('data written.');  // used callback to write data
    });
});

console.log('reading data...');



