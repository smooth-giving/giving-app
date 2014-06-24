define([
        "angular",
        "angular-route",
        "./app/controllers/AppContoller",
        "./app/controllers/DonorsController",
        "./app/factories/appFactory",
        "./app/routes/AppRouter.js"
    ], function(angular) {
        "use strict";

        return angular.module("app", [
            "app.controllers",
            "app.factories",
            "app.routes",
            "ngRoute"
        ]);
    });