var 
	mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

	var TemplateSchema = new mongoose.Schema({
	number: Number,
	places: [{
		row: Number,
		number: Number,
		occupied: { type: Boolean, default: false},
	}]

});

module.exports = mongoose.model('templates', TemplateSchema);