const path = require('path');
const cors = require('cors');
const express = require('express');
const routes = require('../routes');

module.exports = () => {
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // setup the routes
    for (var i = 0; i < routes.length; i++) {
        app.use('/api', routes[i]);
    }

    // serve the front-end client application only when in production mode
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    } else {
        app.get('*', (req, res) => res.send('Please set to production'));
    }
    
    return app;
};