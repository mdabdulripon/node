const express = require('express');
const app = express();

const productRoute = require('./api/routes/profiles.js');
const orderRoute = require('./api/routes/order.js');
// initials route:: get an post route ......
app.use('/profiles', productRoute);
app.use('/orders', orderRoute);

module.exports = app;
