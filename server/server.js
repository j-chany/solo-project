const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// import routers
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');

const app = express();

const PORT = 8080;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded());

// serve all static files
app.use('/', express.static(path.join(__dirname, '../client')));

// redirect to log in page
app.get('/', (req, res) => {
  res.redirect('/login');
});



// login page 
app.get('/login',(req, res) => {
res.sendFile(path.join(__dirname, '../client/html/index.html'));
});
// rest of the request of login will be handled with router
app.use('/login', loginRouter);

// sign up page
// app.get('/signup',(req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/html/signup.html'));
// });
// rest of the request of signing up will be handled with router
app.use('/signup', signupRouter);

// app.get('/dashboard',(req, res) => {
//   res.sendFile(path.join(__dirname, '../client/html/index.html'));

// //   res.sendFile(path.resolve(__dirname, '../client/html/dashboard.html'));
// });
// rest of the request of signing up will be handled with router
app.use('/dashboard', dashboardRouter);






// catch all unknown routes
app.use('*', (req, res) => {
  res.status(404).json('CANNOT FIND PAGE');
});

// global Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Lisening on port ${PORT}...`);
});

module.exports = app;
