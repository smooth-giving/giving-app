require('angular/angular');
require('angular-route');
require('angular-resource');
require('angular-base64');
require('angular-cookies');

var smoothApp = angular.module("smoothApp", ["ngRoute", "base64", "ngCookies" ]);

require("./controllers/smoothController.js")(smoothApp);
require("./controllers/donateController.js")(smoothApp);
require("./controllers/thanksController.js")(smoothApp);

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
        .otherwise({
            //redirectTo: "/"
        });
}]); // end smoothApp.config