const express = require('express');
const user = require('../models/userSchema');

const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    res.send('Welcome ya 3el2');
});

router.post('/login', (req, res) => {
    //
});

router.get('/logout', (req, res) => {
    //
});
