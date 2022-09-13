const cookieController = {}; 

cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  res.cookie('ssid', res.locals.userId, { httpOnly: true });
  return next();
};

module.exports = cookieController;
