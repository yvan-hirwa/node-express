const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the Server');
});

server.listen(3400, 'localhost', () => {
    console.log('listening from port: 8000');
});