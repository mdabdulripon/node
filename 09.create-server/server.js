const http = require('http');
const chalk = require('chalk');

const options = {
    port: 3000,
    message: 'connected'
};

const server =  http.createServer( (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write(`
        <h5> Welcome back</h5>
    `)
});

server.listen(options.port, () => {
    console.log(chalk.green(`The application is ${options.message} at http://localhost:${options.port}`));
});

