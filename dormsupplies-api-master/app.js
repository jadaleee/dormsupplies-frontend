const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./models/config');
const routes = require('./routes/index');

const app = express();


mongoose.Promise = global.Promise
mongoose.connect(config.dbUrl, {server: {socketOptions: { keepAlive: 120 } } })


// chain of middleware functions below!
// log requests
app.use(logger('dev'));
// create req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// applies function to all paths. telling app that we're going to be using the routes express middleware that we wrote
app.use('/', routes)

app.use((req, res, next) => {
	const err = new Error('Not found')
	err.status(404)
	next(err)
})

app.use((err, req, res, next) => {
	console.log(err)
	res.sendStatus(err.Status || 500)
})

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!')
});