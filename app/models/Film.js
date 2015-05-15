var 
	mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;

var FilmSchema = new mongoose.Schema({	
	date: { type : Date, default: Date.now },
	title: String,
	description: String,
	begin: Date,
	end: Date,
	sessions: [{type: ObjectId, ref: 'HallSchema'}]

});

module.exports = mongoose.model('films', FilmSchema);