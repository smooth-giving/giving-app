// modules ======================================
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var morgan = require("morgan");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
var port = process.env.PORT || 3000;
var adminRoutes = require("./api/routes/adminRoutes");

var app = express();
//var jwtauth = require("./api/auth/jwtauth")(app);

// configuration ================================
var db = require("./api/db");

mongoose.connect(db.url);

//var port = process.env.PORT || 3000;
var secret = process.env.SECRET || "change-this-now";
//app.set(port);
//app.set('port', process.env.PORT || 3000);
app.set(secret);

app.use(bodyParser.json());
app.use(morgan());
app.use(cookieParser());

// required for passport
app.use(session({ secret: "ilovepugs"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



// routes =======================================
require("./app/routes/routes.js")(app, passport);
//app.get('/admin', adminRoutes.collection);
//app.use("/", express.static("app"));

// start app ====================================

app.listen(port);
console.log("app started on port: " + port);




//exports = module.exports = app;