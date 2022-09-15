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
    _id: req.body.id,
  })
    .then((data) => {
      if (data) return next();

      res.status(400).json('Expense Not Found');
    })
    .catch(() => next('ERROR IN dashController: delete expense'));
};

dashController.deleteAllExpense = (req, res, next) => {
  Source.deleteMany({
    user: req.body.user
  })
  .then((data) => {
    if (data) return next();

    res.status(400).json('No Expense found');
  })
  .catch(() => next('ERROR IN dashController: delete Allexpense'));
}

module.exports = dashController;
