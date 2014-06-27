/*jslint node: true */

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect("/#/dashboard");
}

module.exports = function(app, passport) {

    // sign up page

    app.get("/signup", function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render("signup.hbs", {message: req.flash("signupMessage")});
    });

    // process the sign up form
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/#/dashboard",
        failureRedirect: "/signup",
        failureFlash: true
    }));

    // login page
    app.get("/login", function(req, res) {
        res.render("login.hbs", {message: req.flash("loginMessage")});
    }); //end app.get("/login")

    // process the login form
    app.post("/login", passport.authenticate("local-login", {
        successRedirect : "/#/dashboard",
        failureRedirect : "/login",
        failureFlash : true
    })); // end app.post("/login")

    // profile of Admin
    // app.get("/admin", isLoggedIn, function(req, res) {
    //     res.render("admin.html", {
    //         admin : req.admin
    //     });
    // }); //end app.get("/profile")

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    }); // end app.get("/logout")

}; // end module.exports









