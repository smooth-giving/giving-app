/*jslint node: true */
var mongoose = require("mongoose");

var donorSchema = mongoose.Schema({
    fName : { type: String, trim: true},
    lName : { type: String, trim: true, uppercase: true},
    address : { type: String, trim: true},
    city : { type: String, trim: true},
    state : { type: String, trim: true, uppercase: true},
    zipcode : { type: String, trim: true},
    phone : { type: String, trim: true},
    email : { type: String, trim: true},
    donationAmount : { type: Number},
    created : { type: Date, default: Date.now}
});

module.exports = mongoose.model("Donor", donorSchema);