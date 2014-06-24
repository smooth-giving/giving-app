angular.module("smoothApp.controllers", [])
    .controller("DonorCtrl", ["$scope", "SmoothDonors", function($scope, SmoothDonors) {
        $scope.data = {};

        SmoothDonors.query(function(response) {
            $scope.data.lName = lName;
            console.dir(data);
        });
    }]);


