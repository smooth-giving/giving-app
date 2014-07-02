/*jslint node: true */
"use strict"

var Admin = require("../models/Admin");

module.exports = function(app, passport) {
    app.post("/api/admins", function(req, res) {
        Admin.findOne({"basic.email" : req.body.email}, function(err, admin) {
            if(err) {
                req.send(500, err);
                return false;
            }
            if(admin) {
                res.send(401, {"msg": "A user with that email already exists"});
                return false;
            }

            var newAdmin = new Admin({});
            newAdmin.basic.email = req.body.email;
            newAdmin.basic.password = newAdmin.generateHash(req.body.password);

            newAdmin.save(function(err, resNewAdmin) {
                if(err) {
                    res.send(500, err);
                    return false;
                }
                res.json({"jwt_token" : resNewAdmin.createToken(app)});
            });
        }); // end Admin.findOne
    }); // end app.post("/api/admin")

    app.get("/api/admins", passport.authenticate('basic', {session: false}),
        function(req, res) {
            console.log(res);
            res.json({"jwt" : req.admin.createToken(app)});
        });
}; // end module.exports