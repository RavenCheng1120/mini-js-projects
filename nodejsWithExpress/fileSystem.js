const fs = require('fs');

// create a file
fs.writeFile("document.txt", "Writefile to a text file.", err => {
    if(err) throw err;
    else
        console.log("File created.");
});

fs.readFile('document.txt', 'utf8', (err,data) => {
    if(err) throw err;
    else
        console.log(data);
});

// rename the file
fs.rename('document.txt', 'exampleFile.txt', err => {
    if(err) throw err;
    else
        console.log("Successfully rename the file");
});

// add more text to file
fs.appendFile('exampleFile.txt', "\nAdded text to file.", err => {
    if(err) throw err;
    else
        console.log("Successfully appended to the file");
});

// delete the file
fs.unlink('exampleFile.txt', err => {
    if(err) throw err;
    else
        console.log("Successfully deleted the file");
});

// read files in dir
fs.readdir("example", (err, files) => {
    if(err) throw err;
    else
        console.log(files);
});