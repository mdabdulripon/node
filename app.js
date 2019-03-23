const _http = require('http');

const server = _http.createServer((req, res, next) => {
    // ! Request
    console.log(`request url :`, req.url);
    console.log(`request headers :`, req.headers);
    console.log(`request method :`, req.method);

    // ! Response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');

        res.write('<head>');
            res.write('<title>Node js</title>');
        res.write('</head>');

        res.write('<body>');
            res.write('<p>Welcome to Node js app</p>');
        res.write('</body>');

    res.write('</html>');
});

server.listen(3000);
