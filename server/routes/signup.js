const express = require('express');
const userController = require('../controllers /userController.js');
const path = require('path');

const router = express.Router();



router.post('/', userController.createUser,(req, res) => {
  console.log(res.locals.user)
  // redirect to main page
  res.status(200).json(res.locals.user)
})




module.exports = router;
