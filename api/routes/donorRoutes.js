/*jslint node: true */
var Donor = require("../models/Donor");

module.exports = function(app) {

    app.get("api/donors", function(req, res) {
        Donor.find(function(err, donors) {
            if(err) {
                res.send(err);
            }
            res.json(donors);
        });
    }); //end app.get("api/donors")

    app.post("api/donors", function(req, res) {
        Donor.create({
            fName : req.body.fName,
            lName : req.body.lName,
            address : req.body.address,
            city : req.body.city,
            state : req.body.state,
            zipcode : req.body.zipcode,
            phone : req.body.phone,
            email : req.body.email,
            donationAmount : req.body.donationAmount,
            created : Date.now(),
            done : false
        }, function(err, donor) {
            if(err) {
                res.send(err);
            }
            Donor.find(function(err, donors) {
                if(err) {
                    res.send(err);
                }
                res.json(donors);
            });

        });
    }); // end app.post("api/donors")

}; // end module.exports














