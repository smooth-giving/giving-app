/*jslint node: true */
var Donor = require("../models/Donor");

module.exports = function(app) {

    app.get("/api/donors/:id", function(req, res) {
        console.log("top of the get request");
        res.setHeader("Content-Type", "application/json");
        Donor.find({"lName" : req.params.id}, function(err, data) {
            if(err) {
                res.send(500, {error: err});
                return false;
            }
            console.dir(data);
            res.send(data);
        });
    }); //end app.get("api/donors/:id:")

    app.get("/api/donors", function(req, res) {
        res.setHeader("Content-Type", "application/json");
        Donor.find({}, function(err, donors) {
            if(err) {
                res.send(err);
            }
            res.send(donors);
        });
    }); //end app.get("api/donors")

    app.post("/api/donors", function(req, res) {
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














