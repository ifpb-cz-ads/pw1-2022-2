const express = require('express');
const ALLOWED_IPS = ['127.0.0.1', '::ffff:127.0.0.1', '123.456.7.89'];

const api = express.Router();

api.use((req, res, next) => {
    const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        res.status(401).send('Not authorized!');
    } else {
        next();
    }
});

api.get('/users', (req, res) => {
    /* ... */
});
api.post('/user', (req, res) => {
    /* ... */
});
api.get('/messages', (req, res) => res.send('olá pw2'));
api.post('/message', (req, res) => {
    /* ... */
});

module.exports = api;
