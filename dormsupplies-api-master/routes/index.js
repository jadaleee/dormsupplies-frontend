// convention to name main executing file as index.js
const express = require('express')
const router = express.Router()

const users = require('../controllers/users')
const items = require('../controllers/items')

/*
* ~~~~ Routes for users ~~~~
*/

// gets the request.post from frontend through the router and calls /users
router.route('/users')
	.get(users.getAllUsers)
	.post(users.createUser)


//put a closing route of /id in order to avoid unexpected behavior like typos of adding a :userId
router.route('/users/:userId/id')
	.get(users.getUserById)
	.put(users.updateUser)
	.delete(users.deleteUser)

router.route('/users/:userId/orders')
	.post(users.addOrder)

router.route('/users/:email/email')
	.get(users.getUserByEmail)

/*
* ~~~~ Routes for items ~~~~
*/

router.route('/items')
	.get(items.getAllItems)
	.post(items.createItems)

router.route('/items/:itemId/id')
	.get(items.getItemById)
	.put(items.updateItem)
	.delete(items.deleteItem)

router.route('/items/:itemName/name')
	.get(items.getItemByName)

module.exports = router