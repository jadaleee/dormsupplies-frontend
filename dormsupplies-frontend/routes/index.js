const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/success', (req, res, next) => {
	return res.render('successfulLogin');
});

router.get('/items', (req, res, next) => {
	return res.render('items');
})

// request.post is what directs the frontend to the backend router
// requesting the /users function
router.post('/register', (req, res, next) => {
	//requets.post receives the newUser from users.js
	request.post({
		url: config.apiUrl + '/users',
		form: req.body
	}).pipe(res)
	// now did a pipe to script.js
});

router.post('/addItem', (req, res, next) => {
	//requets.post receives the newUser from users.js
	request.post({
		url: config.apiUrl + '/items',
		form: req.body
	}).pipe(res)
	// now did a pipe to script.js
});

router.get('/items', (req, res, next) => {
	request.get({
		url: config.apiUrl + '/items',
	}).pipe(res)
})

module.exports = router;
