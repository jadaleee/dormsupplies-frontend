const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
	name: String,
	description: String,
	image: String,
	price: Number,
	quantity: Number
	//businessID: { TYPE: SCHEMA.OBJECTiD, REF: 'USER'}
},
	{
	toObject: {getters: true},
	timestamps:{
		createdAt: 'createdDate',
		updatedAt: 'updatedDate'
		}
	}
)

const Item = mongoose.model('Item', itemSchema)
module.exports = Item;