const express = require('express');
const router = express.Router();
const {
    createMessageEndpoint,
    fetchMessagesEndpoint
} = require('../controllers/messages.controller');

router.route('/messages')
    .get(fetchMessagesEndpoint)
    .post(createMessageEndpoint);

module.exports = router;