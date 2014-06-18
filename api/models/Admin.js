var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var jwt = require("jwt-simple");
var moment = require("moment");

var adminSchema = mongoose.Schema({
    basic: {
        email: String,
        password: String,
        admin: Boolean
    }
});

adminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSynch(8), null);
};

adminSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.basic.password);
};

adminSchema.methods.createToken = function(app) {
    var expires = moment().add("days", 7).valueOf();
    var that = this;
    var token = jwt.encode({
        iss: that._id,
        expires: expires
    }, app.get("jwtTokenSecret"));
    return token;
};

module.exports = mongoose.model("Admin", adminSchema);



