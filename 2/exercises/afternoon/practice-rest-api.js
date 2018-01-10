const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// log requests
app.use(logger('dev'));
// create req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let idTracker = 1;
// call this function to create new ids
// BONUS: how would you use a closure here to get idTracker out of global scope?
function genId() {
    return idTracker++;
}

// create a REST API for your users db, defined below:
// the database will just be the array of users
// creating a user is defined as pushing a new object to the array
// deleting a user is defined as removing the respective user object from the array
const users = [
    {
        id: 0,
        name: 'John Doe',
        email: 'john@doe.com',
        // NOTE: never actually store pws in plaintext
        password: 'asdf'
    }
];

// get all users
app.get('/users', (req, res, next) => res.send(users));

// get single user based on id
app.get('/users/:id', (req,res,next) => {
	for (let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id)
            return res.json(users[i]);
    }
    return res.status(404).send('No user with that ID');
	// const result = users.filter(user => user['id'] === req.params.id)
	// res.send(result)
})

// create a user
app.post('/create', function (req, res, next){
	const body = req.body
	if (typeof body.name!=='string'){
		return res.status(400).send("missing name")
	}
	if (typeof body.email!=='string'){
		return res.status(400).send("missing email")
	}
	if (typeof body.password!=='string'){
		return res.status(400).send("missing password")
	}
	users.push(body)
	return res.send(users)
})

// update user based on id
app.put('/update/:id', function (req,res, next){
	for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
            users[i].name = req.body.name || users[i].name;
            users[i].email = req.body.email || users[i].email;
            users[i].password = req.body.password || users[i].password;
            return res.sendStatus(200)
        }
    }
    return res.status(404).send('No user with that ID')
})

app.delete('/delete/:id', function (req, res, next){
	// for loop, found where ids are equal and then splices
	for (var i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
        	users.splice(i,1)
        	return res.send(users)
        }
    }
	return res.status(404).send('No user with that ID')
})

// clients should be able to create new users, get all users, get a single user,
// update a user (based on their id), and delete a user
// feel free to use any built-in functions (including ES6 functions)
// don't use any external libraries (no more require() statements)




// if you finish early, start adding data validation. don't insert values other
// than name/email/pw, reject creations if they don't have an email and pw, etc.

const server = app.listen(3000);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
