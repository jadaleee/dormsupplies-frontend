const User = require('../models/schemas/user')
const Item = require('../models/schemas/item')

// if we did module.exports, then we would need a new file for every function.
// so instead, we do exports.createUser and give the function a name

/*
* C.R.U.D. Controllers
*/
exports.createUser = (req, res, next) => {
	console.log(req.body)
	if (!req.body.name){
		return res.status(400).send('Must provide name')
	}
	if (!req.body.email){
		return res.status(400).send('Must provide email')
	}
	if (!req.body.hash){
		return res.status(400).send('Must provide valid password')
	}
	if (!req.body.classYear){
		return res.status(400).send('Must provide year')
	}
	if (!req.body.address){
		return res.status(400).send('Must provide address')
	}
	const userData = {
		email: req.body.email,
		hash: req.body.password,
		name: req.body.name,
		address: req.body.address,
		classYear: req.body.year
	}

	const newUser = new User(userData)
	newUser.save((err) => {
		if (err) return next(err)
		// sends the newUser object as the return value of request.post({}) in index.js of front end	
		return res.json(newUser)
	})
}

// Read

exports.getAllUsers = (req, res, next) => {
	// empty object returns everything
	User.find({}, (err, users) => {
		if (err) return next(err)
		return res.json(users)
	})
}

exports.getUserById = (req, res, next) => {
	User.findById(req.params.userId, (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(404).send('No user with id: ' + req.params.userId)
		return res.json(user)
	})
}

exports.getUserByEmail = (req, res, next) => {
	console.log(req)
	User.findOne({email: req.params.email}, (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(404).send('No user with that email: ' + req.params.email)
		return res.json(user)
	})
}

// Update

exports.updateUser = (req, res, next) => {
	User.findOneAndUpdate({ _id: req.params.userId }, req.body, {}, (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(404).send('Cannot find user ' + req.params.userId)
		return res.json(user)
	})
}

// orders: [{
//     	items: [{
//       		itemId: String,
//       		quantity: Number,
//       		price: Number
//       	}],
//       	purchasedDate: Date,
//     	deliveredDate: Date,
//     	isPaid: Boolean
//     }]


// Gets all coupons from db where startDate < now, endDate > now
// exports.getActiveCoupons = (req, res, next) => {
//   const now = new Date()
//   Coupon.find({
//     $and: [
//       { startDate: { $exists: true } }
//       { startDate: { $lt: now } },
//       { endDate: { $gt: now } }
//     ]
//   })  
// }


exports.addOrder = (req, res, next) => {
	User.findById(req.params.userId, (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(404).send('No user with id: ' + req.params.userId)
		
		const props = ['purchasedDate', 'deliveredDate', 'isPaid']
	  	props.forEach((prop) => {
	    if (!req.body[prop]) return res.status()
	  	})

		const orderData = {
	    	purchasedDate: req.body.purchasedDate,
	  		deliveredDate: req.body.deliveredDate,
	    	isPaid: false
	  	}

	  	console.log(orderData)

	  	// const newOrder = new User.orders(orderData)
	  	// newOrder.save((err) => {
	  	// 	if (err) return next(err)
	  	// })
	  	
	  	user.orders = orderData
	  	user.markModified('orders')
	  	user.save()
	})
	res.send('works!')

	
	// const order = {
 //   //  purchasedDate: req.body.purchasedDate,
 //  	// deliveredDate: req.body.deliveredDate,
 //   //  isPaid: req.body.isPaid
 //  	}
}

// 1. grab the user using findById
// 2. construct new order object
// 3. push to user.orders
// 3.5 user.markModified('orders')
// 4. save to Mongo (user.save())

// exports.findPrice = (req, res, next) => {
// 	Item.find({
// 		price: { $exists: true }
// 	}
// 	})
// }

// Delete

exports.deleteUser = (req, res, next) => {
	User.findByIdAndRemove (req.params.userId, (err, user) => {
		if (err) return next(err)
		if (!user) return res.status(404).send('Cannot find user ' + req.params.userId)
		return res.json(user)
	})
}



/*
module.exports = {
	createUser: function
}
*/