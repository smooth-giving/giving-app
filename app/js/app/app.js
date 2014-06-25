require('angular/angular');
require('angular-route');
require('angular-resource');
require('angular-base64');
require('angular-cookies');

var smoothApp = angular.module("smoothApp", ["ngRoute", "base64", "ngCookies" ]);

require("./controllers/smoothController.js")(smoothApp);
require("./controllers/donateController.js")(smoothApp);
require("./controllers/thanksController.js")(smoothApp);
require("./controllers/signupController.js")(smoothApp);

smoothApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/donate.html",
            controller: "DonateController"
        })
        .when("/admin", {
            templateUrl: "views/admin.html",
            controller: "SmoothController"
        })
        .when("/thanks", {
            templateUrl: "views/thanks.html",
            controller: "ThanksController"
        })
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: "SignupController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]); // end smoothApp.config