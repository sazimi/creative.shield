var Shield;
(function (Shield) {
    Shield.shield.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            'abstract': true,
            template: '<ui-view />',
            onEnter: function () {
                console.log("on Enter: main");
            }
        }).state('main.shield', {
            url: '/',
            templateUrl: 'modules/common/first.html',
            onEnter: function () {
                console.log("on Enter: start");
            },
            resolve: {
                frontend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "frontend",
                        files: [
                            'modules/frontend/frontend.js',
                            'modules/frontend/states.js'
                        ]
                    });
                }
            },
            controller: function ($scope, $rootScope, $state) {
                $scope.nima = function () {
                    console.log('clicked!');
                    $state.go('.frontend.sherry');
                };
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Shield";
                console.log('Main + Shield');
            }
        }).state('main.nima', {
            url: '/nima',
            template: 'Nima Sherry',
            onEnter: function () {
                console.log("on Enter: start");
            },
            controller: function ($state) {
                $state.go('^.shield.frontend.sherry');
            },
            resolve: {
                frontend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "frontend",
                        files: ['modules/frontend/frontend.js']
                    });
                }
            }
        });
    }]);
})(Shield || (Shield = {}));
//# sourceMappingURL=states.js.map