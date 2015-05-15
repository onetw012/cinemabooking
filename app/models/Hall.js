var 
	mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var HallSchema = new mongoose.Schema({
	number: Number,
	date: { type : Date, default: Date.now },
	film: String,
	/*session*/
	places: [{
		row: Number,
		number: Number,
		occupied: { type: Boolean, default: false},
		user: {type: ObjectId, ref: 'UserSchema'},
		bookdate: {type: Date, default: Date.now }
	}]

});

module.exports = mongoose.model('halls', HallSchema);