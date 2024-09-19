const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Here is a short history');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href='/'>Back home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
