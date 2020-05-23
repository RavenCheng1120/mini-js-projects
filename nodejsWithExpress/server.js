const http = require('http');
const fs = require('fs');

// 把static/index.html送到頁面上
http.createServer((req, res) => {
    const readStream = fs.createReadStream("./static/index.html",'utf8');
    res.writeHead(200, { 'content-type' : 'text/html' });
    readStream.pipe(res);
}).listen(3000);