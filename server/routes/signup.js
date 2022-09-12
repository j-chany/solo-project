const express = require('express');
const userController = require('../controllers /userController.js');
const path = require('path');

const router = express.Router();



router.post('/', userController.createUser,(req, res) => {
  // redirect to main page
  // res.status(200).json('Created User')
  res.redirect('/dashboard');
})




module.exports = router;
