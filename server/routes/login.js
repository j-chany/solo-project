const express = require('express');
const userController = require('../controllers /userController.js');
const path = require('path');

const router = express.Router();

// verify user

router.post('/', userController.verifyUser, (req, res) => {
  // redirect to dashBoard
  res.redirect('/dashboard')
});

module.exports = router;
