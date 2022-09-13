const express = require('express');
const dashController = require('../controllers /dashController .js');

const path = require('path');

const router = express.Router();

// Create data current data: expense logged
router.get('/expense', dashController.getAllData, (req, res) => {
  //  get all data
  res.status(200).json(res.locals.userData);
});

// adding Income
router.post('/', dashController.createExpense, (req, res) => {
  // grab the current user
  // update the income to db
  res.status(200).json(res.locals.newEntry);
});

// deleting expense
router.delete('/', dashController.deleteExpense, (req, res) => {
  res.status(200).json('deleted');
});

module.exports = router;
