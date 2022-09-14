const Source = require('../models/incomeModel');
const dashController = {};

// get all data according to user
dashController.getAllData = (req, res, next) => {
  const id = req.query.id;
  // find income posted by appropiate user
  // user should be the user Id gen by Mongo
  Source.find({
    user: id,
  })
    .then((data) => {
      res.locals.userData = data;
      console.log('fetching')
      next();
    })
    .catch(() => next('ERROR IN dashController: Get ALL DATA'));
};

// create new entry
dashController.createExpense = (req, res, next) => {
  Source.create({
    name: req.body.name,
    categories: req.body.categories,
    amount: req.body.amount,
    date: req.body.date,
    user: req.body.user,
  })
    .then((data) => {
      res.locals.newEntry = data;
      console.log('Expense Created');
      next();
    })
    .catch((e) => next(`ERROR IN dashController: create expense',${e}`));
};

// delete expense
dashController.deleteExpense = (req, res, next) => {
  Source.findOneAndDelete({
    user: req.body.userID,
    _id: req.body._id,
  })
    .then((data) => {
      if (data) return next();

      res.status(400).json('Expense Not Found');
    })
    .catch(() => next('ERROR IN dashController: delete expense'));
};

module.exports = dashController;
