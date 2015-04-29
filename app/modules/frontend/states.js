var frontend;
(function (frontend) {
    frontend.frontend.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.frontend', {
            'abstract': true,
            template: '<ui-view />',
            url: 'frontend',
            resolve: {
                frontend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: "frontend.sherry",
                            files: [
                                'modules/frontend/modules/sherry/sherryServices.js',
                                'modules/frontend/modules/sherry/sherry.js'
                            ]
                        },
                        {
                            name: "frontend.nima",
                            files: [
                                'modules/frontend/modules/nima/nimaServices.js',
                                'modules/frontend/modules/nima/nima.js'
                            ]
                        },
                        {
                            name: "frontend.emil",
                            files: [
                                'modules/frontend/modules/emil/emilServices.js',
                                'modules/frontend/modules/emil/emil.js'
                            ]
                        },
                        {
                            name: "frontend.jens",
                            files: [
                                'modules/frontend/modules/jens/jensServices.js',
                                'modules/frontend/modules/jens/jens.js'
                            ]
                        }
                    ]);
                }
            }
        }).state('main.shield.frontend.home', {
            url: '/home',
            templateUrl: 'modules/frontend/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.frontend.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.frontend.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                console.log('frontend + home');
            }
        }).state('main.shield.frontend.sherry', {
            url: '/sherry',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/sherry.png" />',
            controller: function ($scope, $rootScope, sherryServices) {
                $scope.name = sherryServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.frontend.sherry";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                $rootScope.url = "/frontend/sherry";
            }
        }).state('main.shield.frontend.nima', {
            url: '/nima',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/nima.png" />',
            controller: function ($scope, $rootScope, nimaServices) {
                $scope.name = nimaServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.frontend.nima";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                $rootScope.url = "/frontend/nima";
            }
        }).state('main.shield.frontend.emil', {
            url: '/emil',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/emil.png" />',
            controller: function ($scope, $rootScope, emilServices) {
                $scope.name = emilServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.frontend.emil";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                $rootScope.url = "/frontend/emil";
            }
        }).state('main.shield.frontend.jens', {
            url: '/jens',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/jens.png" />',
            controller: function ($scope, $rootScope, jensServices) {
                $scope.name = jensServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.frontend.jens";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                $rootScope.url = "/frontend/jens";
            }
        });
    }]);
})(frontend || (frontend = {}));
//# sourceMappingURL=states.js.map