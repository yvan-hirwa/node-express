const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url
    
    if (pathName === '/product') res.end('Hello this is product page');
    else if (pathName === '/about') res.end('Hello this is about page');
    else if (pathName === '/') res.end('welcome to the homepage');
    else { 
            res.writeHead(404);
            res.end('error: 404 page not found');
        }
    
});

server.listen(3400, 'localhost', () => {
    console.log('listening from port: 8000');
});