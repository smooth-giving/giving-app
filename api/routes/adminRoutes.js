module.exports = function(app, passport) {
    // home page
    app.get('/', function(req, res) {
        res.render('index.hbs');
    });

    // login page
    app.get('/login', function(req, res) {
        res.render('login.hbs', {message: req.flash('loginMessage')});
    }); //end app.get('/login')

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/admin',
        failureRedirect : '/login',
        failureFlash : true
    })); // end app.post('/login')

    // profile of Admin
    app.get('/admin', isLoggedIn, function(req, res) {
        res.render('admin.hbs', {
            admin : req.admin
        });
    }); //end app.get('/profile')

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    }); // end app.get('/logout')

}; // end module.exports

function isLoggedIn(req, res, next) {
    if(req.isAuthenticate()) {
        return next();
    }

    res.redirect('/');
}







