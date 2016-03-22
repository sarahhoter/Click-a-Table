/// <reference path="angular.js" />

var app = angular.module("myApp", ["ngRoute"]);

app.controller("LoginController", ["$scope", LoginController]);
app.controller("OrderController", ["$scope", OrderController]);
app.controller("MenuController", ["$scope", MenuController]);
app.controller("CourseTypeController", ["$scope", CourseTypeController]);
app.controller("CourseController", ["$scope", CourseController]);

app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        }).
        when('/order', {
            templateUrl: 'order.html',
            controller: 'OrderController'
        }).
        when('/menu', {
            templateUrl: 'menu.html',
            controller: 'MenuController'
        }).
        when('/courseType', {
            templateUrl: 'courseType.html',
            controller: 'CourseTypeController'
        }).
        when('/course', {
            templateUrl: 'course.html',
            controller: 'CourseController'
        }).
        otherwise({
            redirectTo: '/index'
        });
}]);