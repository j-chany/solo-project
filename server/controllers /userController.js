const User = require('../models/userModel');
const userController = {};

// create user
userController.createUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
  })
    .then((data) => {
      console.log(data._id);
      res.locals.user = data;
      return next();
    })
    .catch((e) => {
      console.log(req.body);
      return next('ERROR in userController.createrUser: ' + JSON.stringify(e));
    });
};
// verify user login info
userController.verifyUser = (req, res, next) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((data) => {
      if (data) {
        console.log('data', data);
        res.locals.user = data;
        return next();
      } else return next('ERROR: username or password incorrect');
    })
    .catch((e) => {
      console.log(req.body);
      return next('ERROR in userController.createrUser: ' + JSON.stringify(e));
    });
};

module.exports = userController;
