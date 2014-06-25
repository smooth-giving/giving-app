'use strict';

var Admin = require('../models/Admin');
var jwt = require('jwt-simple');
var app;

module.exports = function(app) {
    var jwtauth = {};
    jwtauth.auth = function(req, res, next) {
        console.log("headers:")
        console.dir(req.headers);
        console.log("body:");
        console.dir(req.body);
        var token =  (req.body && req.body.jwt_token) || (req.headers.jwt)

        if(token) {
            try {
                var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
                Admin.findOne({'_id' : decoded.iss}, function(err, admin) {
                    if(err) {
                        return res.send(500, err);
                    }

                    req.admin = admin;
                    return next();
                });
            } catch(err) {
                return next();
            }
        } else {
            return res.send(401, {'msg' : 'no access token found.'});
        }
    };
    return jwtauth;
};
