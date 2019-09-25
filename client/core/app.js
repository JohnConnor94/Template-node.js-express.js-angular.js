angular
    // main module definition
    .module("myApp", ["ngRoute"])
    // routes definition
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                template: "<div>/ selected</div>"
            })
            .when("/placeholder", {
                template: "<div>placeholder</div>"
            })
            .otherwise({
                template: "<div>Nothing has been selected</div>"
            })
    });
