import http from'http';

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if(req.method === 'PUT') {
        res.statusCode = 200;
        res.end('PUT-запрос обработан');
    } else if(req.method === 'DELETE') {
        res.statusCode = 200;
        res.end('DELETE-запрос обработан');
    } else {
        res.statusCode = 405;
        res.end('Метод не разрешен')
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Сервер запущен на http://127.0.0.1:3000')
})