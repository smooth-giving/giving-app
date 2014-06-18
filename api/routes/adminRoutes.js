var Admin = require("../models/Admin");

exports.collection = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    Admin.find({}, function(err, users) {
        if(err) {
            res.send(500, {err: err});
            return false;
        }
        res.send(users);
    });
};