/*jslint node: true */
var mongoose = require("mongoose");
var Donor = require("../models/Donor");

module.exports = function(app) {
    app.post("/", function(req, res) {
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
                res.render("index.hbs", {message: req.flash("thank you message", "Thanks bro.")});
            }
        });

    });

    app.get("/", function(req, res) {
        res.render("index.hbs");
    });
}; // end exports.create