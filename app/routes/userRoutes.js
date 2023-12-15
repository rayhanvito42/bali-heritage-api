let express = require('express');
let router = express.Router();

let userService = require('../services/userServices');

router.post('/register', userService.register);
router.post('/login', userService.login);

module.exports = router;