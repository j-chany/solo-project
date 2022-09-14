const express = require('express');
const userController = require('../controllers /userController.js');
const path = require('path');

const router = express.Router();

// verify user

router.post('/', userController.verifyUser, (req, res) => {
  // redirect to dashBoard
  // res.json(res.locals.user)
  res.status(200).json(res.locals.user)
});

module.exports = router;
