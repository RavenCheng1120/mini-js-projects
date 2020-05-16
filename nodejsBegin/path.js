const path = require('path');
const fileLocation =  path.join(__dirname, "sayName.js");
const fileName = path.basename(fileLocation);

console.log(__dirname); // /Users/patty/nodejsPractice/nodejsBegin
console.log(__filename); // /Users/patty/nodejsPractice/nodejsBegin/sayName.js
console.log(fileLocation // /Users/patty/nodejsPractice/nodejsBegin/sayName.js
console.log(fileName); // sayName.js
