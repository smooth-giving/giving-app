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

var app = express();
//var jwtauth = require("./api/auth/jwtauth")(app);

// configuration ================================
var db = require("./api/db.js");

mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('you have not bowed to the Mongod');
    }
});

require('./api/auth/passport')(passport);

//var port = process.env.PORT || 3000;
var secret = process.env.SECRET || "change-this-now";
//app.set(port);
//app.set('port', process.env.PORT || 3000);
app.set(secret);

app.use(bodyParser());
app.use(morgan());
app.use(cookieParser());
app.use(express.static(__dirname + '/app/dist'));
app.set('views', __dirname + '/app/js/app/templates');
app.set('view engine', 'hbs');

// required for passport
app.use(session({ secret: "ilovepugs"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



// routes =======================================
require("./api/routes/adminRoutes.js")(app, passport);
require("./api/routes/donorRoutes.js")(app);
require("./api/routes/homeRoutes.js")(app);
// start app ====================================

app.listen(port);
console.log("app started on port: " + port);




//exports = module.exports = app;