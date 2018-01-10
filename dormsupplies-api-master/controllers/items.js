const Item = require('../models/schemas/item')

/*
* C.R.U.D. Controllers
*/
exports.createItems = (req, res, next) => {
	if (!req.body.quantity){
		return res.status(400).send('Must provide quantity')
	}
	if (!req.body.price){
		return res.status(400).send('Must provide price')
	}
	if( !req.body.name){
		return res.status(400).send('Must provide name')
	}
	const itemData = {
		quantity: req.body.quantity,
		price: req.body.price,
		name: req.body.name
	}

	const newItem = new Item(itemData)
	newItem.save((err) => {
		if (err) return next(err)
		return res.json(newItem)
	})
}

exports.getAllItems = (req, res, next) => {
	// empty object returns everything
	Item.find({}, (err, items) => {
		if (err) return next(err)
		return res.json(items)
	})
}

exports.getItemById = (req, res, next) => {
	Item.findById(req.params.itemId, (err, item) => {
		if (err) return next(err)
		if (!item) return res.status(404).send('No item with id: ' + req.params.itemId)
		return res.json(item)
	})
}

exports.getItemByName = (req, res, next) => {
	Item.findOne({name: req.params.itemName}, (err, item) => {
		if (err) return next(err)
		if (!item) return res.status(404).send('No item with that name: ' + req.params.itemName)
		return res.json(item)
	})
}

exports.updateItem = (req, res, next) => {
	Item.findOneAndUpdate({ _id: req.params.itemId }, req.body, {}, (err, item) => {
		if (err) return next(err)
		if (!item) return res.status(404).send('Cannot find item ' + req.params.itemId)
		return res.json(item)
	})
}

exports.deleteItem = (req, res, next) => {
	Item.findByIdAndRemove (req.params.userId, (err, item) => {
		if (err) return next(err)
		if (!item) return res.status(404).send('Cannot find item ' + req.params.itemDd)
		return res.json(item)
	})
}


/*
module.exports = {
	createUser: function
}
*/