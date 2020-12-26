var mongoose = require("mongoose"),
    Job = require("./job");

/* -------------------- User Schema and Model -------------------- */
var userSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    psw: {type: String}
});

module.exports = mongoose.model("User", userSchema);
