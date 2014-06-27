/*jslint node: true */
var mongoose = require("mongoose");
var Donor = require("../models/Donor");

module.exports = function(app) {
    app.post("/api/donors", function(req, res) {
        new Donor({
            fName : req.body.fName,
            lName : req.body.lName,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            zipcode : req.body.zipcode,
            phone : req.body.phone,
            email : req.body.email,
            donationAmount : req.body.donationAmount,
            created : Date.now()
        }).save(function(err, donor, count) {
            if(err) {
                return (err);
            }
            if(donor) {
                return res.send(donor);
            }
        });
    });
}; // end exports.create