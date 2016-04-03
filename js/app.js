/// <reference path="angular.js" />

var app = angular.module("myApp", ["ngRoute"]);

app.controller("LoginController", ["$scope", LoginController]);
app.controller("OrderController", ["$scope", OrderController]);
app.controller("MenuController", ["$scope", MenuController]);
app.controller("CourseTypeController", ["$scope", CourseTypeController]);
app.controller("CourseController", ["$scope", CourseController]);
app.controller("HomeController", ["$scope", HomeController]);

app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        when('/order', {
            templateUrl: 'views/order.html',
            controller: 'OrderController'
        }).
        when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
        }).
        when('/courseType', {
            templateUrl: 'views/courseType.html',
            controller: 'CourseTypeController'
        }).
        when('/course', {
            templateUrl: 'views/course.html',
            controller: 'CourseController'
        }).
        when('/courseDetail', {
            templateUrl: 'views/courseDetail.html',
            controller: 'CourseDetailController'
        }).
        otherwise({
            redirectTo: '/index'
        });
}]);
