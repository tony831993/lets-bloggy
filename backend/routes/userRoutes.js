const express = require('express');
const { getAllUsers, loginController, registerUserController } = require('../controllers/userController');
const router = express.Router();

// GET: Get all users
router.get('/get_all_user', getAllUsers);

// POST: Create new user
router.post('/register', registerUserController);

// POST: Login user
router.post('/login', loginController);

// router object
module.exports = router;
