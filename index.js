require('colors');
const http = require('http');
const createExpressApp = require('./configs/express');
const { configureWebSocketAsync } = require('./websocket');

const main = async () => {
    const app = createExpressApp();
    const server = http.createServer(app);
    await configureWebSocketAsync(server);

    server.listen(3001, () => {
        console.log('Server is listening..');
    });
};

main();