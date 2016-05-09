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
            templateUrl: 'app/Login/login.html',
            controller: 'LoginController'
        }).
        when('/order', {
            templateUrl: 'app/Order/order.html',
            controller: 'OrderController'
        }).
        when('/menu', {
            templateUrl: 'app/Menu/menu.html',
            controller: 'MenuController'
        }).
        when('/courseType', {
            templateUrl: 'app/CourseType/courseType.html',
            controller: 'CourseTypeController'
        }).
        when('/course', {
            templateUrl: 'app/Course/course.html',
            controller: 'CourseController'
        }).
        when('/courseDetail', {
            templateUrl: 'app/CourseDetails/courseDetail.html',
            controller: 'CourseDetailController'
        }).
        otherwise({
            redirectTo: '/index'
        });
}]);
/*
app.service('menuService', function($http){
    var getAllUsers = function () {
        var request = {
            method: 'GET',
            url: '/current'
        };
        return $http(request);
    };
    return {
        getAllUsers:getAllUsers
    };
})
*/