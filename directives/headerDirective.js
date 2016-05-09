/// <reference path="../js/angular.js" />
app.directive('header', function () {
    return {

        restrict: 'E',
        templateUrl: "../src/header.html",
        scope: {
            items: "="
        },
        controller: ["$scope", function ($scope) {

            $scope.setActive = function (index) {

                angular.forEach($scope.items, function (item) {
                    item.isActive = false;
                });

                $scope.items[index].isActive = true;
            }

        }]
    }
});
