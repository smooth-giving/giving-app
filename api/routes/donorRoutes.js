/*jslint node: true */
var Donor = require("../models/Donor");

module.exports = function(app, passport, jwtauth) {

    app.get("/api/donors/:id", function(req, res) {
        console.log("top of the get request");
        res.setHeader("Content-Type", "application/json");
        Donor.find({"lName" : req.params.id}, function(err, data) {
            if(err) {
                res.send(500, {error: err});
                console.log("express no go bro");
                return false;
            }
            console.dir(data);
            res.send(data);
        });
    }); //end app.get("api/donors/:id:")

    app.get("/api/donors", jwtauth, function(req, res) {
        res.setHeader("Content-Type", "application/json");
        Donor.find({}, function(err, donors) {
            if(err) {
                res.send(err);
                return false;
            }
            res.send(donors);
        });
    }); //end app.get("api/donors")

    app.post("/api/donors", function(req, res) {
        res.setHeader("Content-Type", "application/json");
        var donor = new Donor({
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
        });
        donor.save(function(err, resDonor) {
            if(err) {
                res.send(500, {error: err});
                return false;
            }
            res.send(resDonor);
        }); // end donor.save
    }); // end app.post("api/donors")

}; // end module.exports














