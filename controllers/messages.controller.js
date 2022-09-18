const socket = require('../websocket');
const MESSAGES = [{ message: 'Welcome to the Chat.' }];

const createMessageEndpoint = async (req, res) => {
    MESSAGES.push(req.body);
    socket.io.emit('message', req.body);
    res.status(201).json({ status: 'Message was sent.' });
};

const fetchMessagesEndpoint = async (req, res) => {
    res.status(200).json(MESSAGES);
};

module.exports = {
    createMessageEndpoint,
    fetchMessagesEndpoint
};