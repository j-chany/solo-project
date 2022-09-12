const Source = require('../models/incomeModel');
const dashController = {};

// add income
dashController.getAllData = (req, res, next) => {
  // find income posted by appropiate user
  // user should be the user Id gen by Mongo 
  Source.find({
    user: req.body.user
  })
    .then((data) => {

    })


}