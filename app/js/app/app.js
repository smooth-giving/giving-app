require("angular/angular");
require("angular-route");
require("angular-resource");
require("angular-base64");
require("angular-cookies");
require("ng-stripe-payments");


var smoothApp = angular.module("smoothApp", ["ngRoute", "base64", "ngCookies", "ngStripePayments" ]);

require("./controllers/smoothController.js")(smoothApp);
require("./controllers/donateController.js")(smoothApp);
require("./controllers/thanksController.js")(smoothApp);
require("./controllers/dashboardController.js")(smoothApp);
require("./controllers/reportsController.js")(smoothApp);
require("./controllers/reportController.js")(smoothApp);
require("./controllers/signinController.js")(smoothApp);
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
        .when("/dashboard", {
            templateUrl: "views/dashboard.html",
            controller: "DashboardController"
        })
        .when("/report", {
            templateUrl: "views/report.html",
            controller: "ReportController"
        })
        .when("/reports/:id", {
            templateUrl: "views/reports.html",
            controller: "ReportsController"
        })
        .when("/thanks", {
            templateUrl: "views/thanks.html",
            controller: "ThanksController"
        })
        .when("/signin", {
            templateUrl: "views/signin.html",
            controler: "SigninController"
        })
        .when("/signup", {
            templateUrl: "views/signup.html",
            controller: "SignupController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]); // end smoothApp.config