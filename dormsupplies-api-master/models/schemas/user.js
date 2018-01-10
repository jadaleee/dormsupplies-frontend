const mongoose = require('mongoose')
const Schema = mongoose.Schema

// if you create a new user, you create a new instance of the user schema
// schema take in two objects as a parameter
const userSchema = new Schema({
	email: { type: String, unique: true }, // will error out bc unique: true if another user tries to have same email
	hash: String,
	name: String,
	isAdmin: Boolean,
 	address: String,
  	classYear: Number,
  	orders: [{
    	items: [{
      		itemId: String,
      		quantity: Number,
      		price: Number
      	}],
      	purchasedDate: Date,
    	deliveredDate: Date,
    	isPaid: Boolean
    }]
},
{
	toObject: {getters: true},
	timestamps:{
		createdAt: 'createdDate',
		updatedAt: 'updatedDate'
		}
}
)

const User = mongoose.model('User', userSchema)
module.exports = User;