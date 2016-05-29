function CourseDetailsController($scope, $routeParams, $http)
{
    $scope.orderCourse = orderCourse;

    var courseId = ($routeParams.courseId || "");

    function orderCourse() {
        var course = ({courseId: courseId, amount: 1/*$scope.amount*/});
        $http.post('/order/addOrderItem', course)
            .success(function (response) {
                if (response.isOrdered == true) {
                    $scope.message = response.messages;
                } else {
                    $scope.message = response.messages;
                }
            })
            .error(function (error) {
                console.log('Error: ' + error);

            });
    }
}