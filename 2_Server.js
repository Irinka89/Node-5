import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    try {
        throw new Error('This is a test error');

        res.statusCode = 200;
        res.end('Request processed successfully');

    } catch (error) {
        fs.appendFile('errors.log', `${new Date().toISOString()} - ${error.message}\n`, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });

        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${port}/`);
});
