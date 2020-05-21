const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./streamDoc.txt','utf8');
const writeStream = fs.createWriteStream('streamWrite.txt');
readStream.pipe(writeStream);

// 壓縮
const writeStream = fs.createWriteStream('streamWrite.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

// 解壓縮把gzip換成gunzip