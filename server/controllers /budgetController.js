const Budget = require('../models/budgetModel');
const budgetController = {};

budgetController.setBudget = (req, res, next) => {
  Budget.create({
    budget: req.body.budget,
    user: req.body.user,
  })
    .then((data) => {
      res.locals.budget = data.budget;
      return next();
    })
    .catch((e) => {
      return next('ERROR in budgetController.setBudget: ' + JSON.stringify(e));
    });
};

budgetController.getBudget = (req, res, next) => {
  const id = req.query.user;

  Budget.findOne({
    user: id,
  })
    .then((data) => {
      res.locals.budget = data.budget;
      return next();
    })
    .catch((e) => {
      return next('ERROR in budgetController.getBudget: ' + JSON.stringify(e));
    });
};

budgetController.updateBudget = (req, res, next) => {
  const filter = { user: req.body.user };
  const update = { budget: req.body.budget };
  console.log(req.body.budget)
  Budget.findOneAndUpdate(filter, update, { useFindAndModify: false }, (err, data) => {
      if (data) {
        res.locals.budget = data.budget;
        
        return next(); 
      }
      else next('ERROR, updated unsuccessful')
  });
};

module.exports = budgetController;
