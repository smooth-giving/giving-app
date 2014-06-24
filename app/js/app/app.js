require('angular/angular');
require('angular-route');
require('angular-resource');
require('angular-base64');
require('angular-cookies');

var smoothApp = angular.module("smoothApp", ["ngRoute", "base64", "ngCookies" ]);

require("./controllers/smoothController.js")(smoothApp);

smoothApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/admin', {
            templateUrl: "views/admin.html",
            controller: "SmoothController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]); // end smoothApp.config