angular.module("smoothApp.services", ["ngResource"])
    .factory("SmoothDonors", function($resource) {
        return $resource("http://localhost:3000/api/donors", {})
    })
    .value("version", "0.1.0");