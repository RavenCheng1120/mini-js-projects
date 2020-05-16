const fs = require('fs');

// 寫入檔案
// fs.writeFile("message.txt", "Hello world", err => {
//   if (err)  throw err;
//
//   console.log("File has been written.");
// });

//讀取檔案
fs.readFile('./message.txt', 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
});
