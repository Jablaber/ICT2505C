const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user details
router.get('/:id', userController.getUserDetails);

// Route to edit user details
router.put('/:id', userController.editUserDetails);

// Route to delete user account
router.delete('/:id', userController.deleteUserAccount);

module.exports = router;