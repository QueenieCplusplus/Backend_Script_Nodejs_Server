// 2021, 2/21 sun

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/html');
    res.end(`<h1> This is my nodejs server </h1>`);
 
})

server.listen(port, hostname, () =>{
    console.log(`my server is listening on http://${hostname}:${port}.`)
})