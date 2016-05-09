function HomeController($scope) {
    $scope.items = [
        { label: "דף הבית", path: "#", imageSrc: "", isActive: true },
        { label: "התחבר", path: "#/login", imageSrc: "", isActive: false },
        { label: "מסעדה", path: "#/menu", imageSrc: "", isActive: false },
        /*{ label: "סוגי תפריטים", path: "#/courseType", imageSrc: "", isActive: false },
        { label: "תפריט מנות", path: "#/course", imageSrc: "", isActive: false },*/
        { label: "סל הזמנה", path: "#/order", imageSrc: "", isActive: false }
    ];
/*
    $http.get('/all')
        .success(function (data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });*/
}
