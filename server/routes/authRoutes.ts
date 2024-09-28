const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser}  = require('../controllers/authController')
const User = require('../models/User');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/', test);
router.post('/register',registerUser);
module.exports = router;