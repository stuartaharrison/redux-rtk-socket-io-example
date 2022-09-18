const { Server } = require("socket.io");

const configureWebSocketAsync = async (httpServer) => {
    socket.io = new Server(httpServer);

    socket.io.on('connection', (socket) => {
        console.log('User connected.');

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });
    });

    return socket.io;
};

module.exports = socket = {
    configureWebSocketAsync
};