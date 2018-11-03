const express = require('express');
const app = express();

const productRoute = require('./api/routes/profiles.js');
// initials route:: get an post route ......
app.use('/profiles', productRoute);

module.exports = app;
