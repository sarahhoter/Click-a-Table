/// <reference path="angular.js" />

var app = angular.module("myApp", ["ngRoute"]);

app.controller("LoginController", ["$scope", "$http", LoginController]);
app.controller("RegisterController", ["$scope", "$http", RegisterController]);
app.controller("OrderController", ["$scope", "$http", OrderController]);
app.controller("MenuController", ["$scope", "$http", MenuController]);
app.controller("CourseTypeController", ["$scope", "$http", CourseTypeController]);
app.controller("CourseController", ["$scope", "$routeParams", "$http", CourseController]);
app.controller("CourseDetailController", ["$scope", "$routeParams", "$http", CourseDetailController]);
app.controller("HomeController", ["$scope", "$http", HomeController]);

app.config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'Login/login.html',
            controller: 'LoginController'
        }).
        when('/register', {
            templateUrl: 'Register/register.html',
            controller: 'RegisterController'
        }).
        when('/order', {
            templateUrl: 'Order/order.html',
            controller: 'OrderController'
        }).
        when('/menu', {
            templateUrl: 'Menu/menu.html',
            controller: 'MenuController'
        }).
        when('/courseType', {
            templateUrl: 'CourseType/courseType.html',
            controller: 'CourseTypeController'
        }).
        when('/course/:courseTypeId', {
            templateUrl: 'Course/course.html',
            controller: 'CourseController'
        }).
        when('/courseDetails/:courseId', {
            templateUrl: 'CourseDetails/courseDetail.html',
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