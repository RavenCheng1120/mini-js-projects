const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req,res) => {
  if(req.url === '/'){
    //結合path和fs，在網頁上顯示html檔案內容
    fs.readFile(path.join(__dirname, "index.html"), (err,data) => {
      res.writeHead(200, { 'Content-Type' : 'text/html' });
      res.write(data);
      res.end();
    });
  }else if(req.url === '/user'){
    res.write("Welcome, user XXX");
    res.end();
  }


});

server.listen(3000, () => console.log("server running"));
