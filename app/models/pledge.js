var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Pledge Schema
var PledgeSchema = new Schema ({
	name : String,
  title: String,
  occupation: String,
  commitment: String,
  honoree: String,
  private: Boolean
});

module.exports = mongoose.model('Pledge', PledgeSchema);
