// modules ======================================
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var donorRoutes = require("./api/routes/donorRoutes");
var passport = require("passport");
var morgan = require("morgan");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var jwt = require("jwt-simple");

var app = express();
var jwtauth = require("./api/auth/jwtauth")(app);

// configuration ================================
var db = require("./api/db.js");

mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('you have not bowed to the Mongod');
    }
});

app.set("apiBase", "/api/");

var secret = process.env.SECRET || "change-this-now";
app.set("jwtTokenSecret", process.env.JWT_SECRET || "changemechangeme");
app.set('port', process.env.PORT || 8000);
app.set(secret);

app.use(bodyParser.json());
app.use(morgan());
app.use(cookieParser());
app.use(express.static(__dirname + '/app/dist/'));

// required for passport
require('./api/auth/passport')(passport);
app.use(session({ secret: "ilovepugs"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes =======================================
require("./api/routes/donorRoutes")(app, passport, jwtauth.auth);
require("./api/routes/adminRoutes")(app, passport);
require("./api/routes/homeRoutes")(app);

// start app ====================================
var server = http.createServer(app);
server.listen(app.get("port"), function() {
    console.log("Server running on " + app.get("port"));
});

