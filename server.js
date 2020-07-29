const http = require('http');
const requestListener = (req, res) => {
  let body = [];
  req.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    // body.push(chunk.toString());
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body: ', body);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, World\n');
  });
}
const server = http.createServer(requestListener);
server.listen(8080);