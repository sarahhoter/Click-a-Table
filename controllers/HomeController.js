function HomeController($scope) {
    $scope.items = [
        { label: "Home", path: "#", imageSrc: "", isActive: true },
        { label: "login", path: "#/login", imageSrc: "", isActive: false },
        { label: "menu", path: "#/menu", imageSrc: "", isActive: false },
        { label: "course type", path: "#/courseType", imageSrc: "", isActive: false },
        { label: "course", path: "#/course", imageSrc: "", isActive: false },
        { label: "order", path: "#/order", imageSrc: "", isActive: false }
    ];
}