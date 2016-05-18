function CourseController($scope, $routeParams, $http) {
    $scope.courses = {};
    var id = ($routeParams.courseTypeId || "");

    $http.get('/api/courses/' + id)
        .success(function(data) {
            $scope.courses = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}