
describe('CourseDetails', function () {

    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function($injector) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $injector.get('$controller');
    }));


    describe('course_details', function () {
        console.log("11");
        var mockCourseId = -1;
        it('check get course details empty', inject(function($http){
            var controller = $controller('CourseDetailsController', { $scope: $scope, $routeParams: $routeParams, $http: $http });
            $scope.courseId = mockCourseId;
            $scope.course = {};
            $scope.onLoad();

            expect($scope.course.length).toEqual(0);
        }));
    });
});
