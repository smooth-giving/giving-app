var app = angular.module("smoothApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/admin", {
        controller: "donorsController",
        templateUrl: "/views/admin.html"
    })
    .otherwise({ redirectTo: "/"});
}]);