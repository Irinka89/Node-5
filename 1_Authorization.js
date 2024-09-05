import http from 'http';

const server = http.createServer((req, res) => {
    const authHeader = req.headers['authorization'];
    console.log('authorization Header:', authHeader);

    res.setHeader('Content-Type', 'text/plain');

    if(!req.headers.authorization) {
        res.statusCode = 401;
        res.end('Unauthorized')
    } else {
        res.statusCode = 200;
        res.end('Authorization header received')
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${port}/`);
});