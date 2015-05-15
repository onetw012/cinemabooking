var mongoose = require ('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },	
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tel: {
  	type:String,
  	required: true
  },
  rights: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);