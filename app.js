const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(morgan('dev'));
// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes ......
const productRoute = require('./api/routes/profiles.js');
const orderRoute = require('./api/routes/order.js');


// initials route:: get an post route ......
app.use('/profiles', productRoute);
app.use('/orders', orderRoute);


//route route
app.use((req, res, next) => {
    const err = new Error('NOT FOUND');
    err.status = 400;
    next(err);
})

// error middleware 
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        err: {
            message: err.message
        }
    });
});

module.exports = app;