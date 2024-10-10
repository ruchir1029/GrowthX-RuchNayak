const express = require('express');
const { registerUser, fetchAllAdmins } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.get('/admins', fetchAllAdmins);

module.exports = router;



