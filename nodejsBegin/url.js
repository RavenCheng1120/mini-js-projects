const url = require('url');
const address = 'https://www.youtube.com/watch?v=zQRrXTSkvfw';
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host); //www.youtube.com
console.log(parsedUrl.pathname); // /watch
console.log(parsedUrl.query); // [Object: null prototype] { v: 'zQRrXTSkvfw' }
