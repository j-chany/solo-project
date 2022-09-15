const express = require('express');
const budgetController = require('../controllers /budgetController.js');

const path = require('path');

const router = express.Router();

// grab current budget
router.get('/', budgetController.getBudget, (req, res) => {
  //  get all data
  res.status(200).json(res.locals.budget);
});

// setting budet
router.post('/', budgetController.setBudget, (req, res) => {
  //  get all data
  res.status(200).json(res.locals.budget);
});

// update budget
router.put('/', budgetController.updateBudget, (req, res) => {
  //  get all data
  res.status(200).json( res.locals.budget);
});

module.exports = router;
