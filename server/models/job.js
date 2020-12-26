var mongoose = require("mongoose");
var User = require("./user");

/* -------------------- Job Listing Schema and Model -------------------- */
var jobSchema = new mongoose.Schema({
	title: {type: String},
	company: {
		name: {type: String},
		size: {type: String},
		industry: {type: String}
	},
	category: {type: String},
	location: {type: String},
	rating: {type: Number},
	salary: {type: Number},
	description: {type: String},
	notes: {type: String},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Job", jobSchema);