import fs from 'fs'
import http from 'http'

const PORT = 5000;
const HOST = 'whatahandsomemunda'
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    res.statusCode = 200;
    
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) return console.log(err);
            res.write(data)
            res.end();
        })
    } else if (req.url === '/about' && req.method === 'GET') {
        fs.readFile('./about.html', (err, data) => {
            if (err) throw console.error(err);
            res.write(data)
            res.end();
        })
    } else if (req.url === '/contact' && req.method === 'GET') {
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) throw console.error(err);
            res.write(data)
            res.end();
        })
    } else (
        fs.readFile('./404.html', (err, data) => {
            if (err) throw console.error(err);
            res.statusCode = 404;
            res.write(data)
            res.end();
        })
    )
})

server.listen(PORT);