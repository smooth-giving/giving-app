/*jslint node: true */
var mongoose = require("mongoose");

var donorSchema = mongoose.Schema({
    fName : String,
    lName : String,
    address : String,
    city : String,
    state : String,
    zipcode : String,
    phone : String,
    email : String,
    donationAmount : String,
    created : { type: Date, default: Date.now}
});

module.exports = mongoose.model("Donor", donorSchema);