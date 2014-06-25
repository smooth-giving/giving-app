/*jslint node: true */
// load all the things we need
var LocalStrategy = require("passport-local").Strategy;

// load up the admin model
var Admin = require("../models/Admin");

// expose this function to our app using module.exports
module.exports = function(passport) {
    // passport session setup
    // required for persisten login sessions
    // used to serialize the admin for the session
    passport.serializeUser(function(admin, done) {
        done(null, admin.id);
    });

    // used to deserialize the admin
    passport.deserializeUser(function(id, done) {
        Admin.findById(id, function(err, admin) {
            done(err, admin);
        });
    });

    // Local Singup
     passport.use("local-signup", new LocalStrategy({
        // by default, local strategy uses username and password, we will change username to email
        usernameField : "email",
        passwordField : "password",
        passReqToCallback : true
     },
     function(req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
            // find an admin whose email is the same as the forms email
            Admin.findOne({"local.email" : email}, function(err, admin) {
                if(err) {
                    return done(err);
                }
                if(admin) {
                    return done(null, false, req.flash("signupMessage", "That email is already taken."));
                } else {
                    // if there is no admin with that email
                    // create the admin
                    var newAdmin = new Admin();
                    //set the admin"s local credentials
                    newAdmin.local.email = email;
                    newAdmin.local.password = newAdmin.generateHash(password);
                    // save the admin
                    newAdmin.save(function(err) {
                        if(err) {
                            throw(err);
                        }
                        return done(null, newAdmin);
                    }); // end newAdmin.save
                }
            }); // end Admin.findOne
        }); // end process.nextTick
     })); // end passport.use("local-signup")

    // local login
    passport.use("local-login", new LocalStrategy({
        usernameField : "email",
        passwordField : "password",
        passReqToCallback : true
    },
    function(req, email, password, done) {
        Admin.findOne({"local.email" : email}, function(err, admin) {
            console.dir(admin);
            if(err) {
                return done(err);
            }
            if(!admin) {
                return done(null, false, req.flash("loginMessage", "No admin found."));
            }
            if(!admin.validPassword(password)) {
                return done(null, false, req.flash("loginMessage", "Oops! Wrong password."));
            }
            return done(null, admin);
        }); // end Admin.findOne
    })); // end passport.use("local-login")
}; // end module.exports






















