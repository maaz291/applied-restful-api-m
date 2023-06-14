const express = require('express');
const router = express.Router();
const MovieController = require('./controllers');

router.use('/movies', MovieController);

module.exports = router;
