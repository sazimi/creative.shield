var cute;
(function (cute) {
    cute.cute.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.cute', {
            'abstract': true,
            template: '<ui-view />',
            url: 'cute',
            resolve: {
                cute: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "cute.miglena",
                        files: [
                            'modules/cute/modules/miglena/miglenaServices.js',
                            'modules/cute/modules/miglena/miglena.js'
                        ]
                    }, {
                        name: "cute.alexandra",
                        files: [
                            'modules/cute/modules/alexandra/alexandraServices.js',
                            'modules/cute/modules/alexandra/alexandra.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.cute.home', {
            url: '/home',
            templateUrl: 'modules/cute/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.cute.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.cute.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Cute";
                $rootScope.url = "/cute/home";
                console.log('cute + home');
            }
        }).state('main.shield.cute.miglena', {
            url: '/miglena',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/miglena.png" />',
            controller: function ($scope, $rootScope, miglenaServices) {
                $scope.name = miglenaServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.cute.miglena";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Cute";
                $rootScope.url = "/cute/miglena";
            }
        }).state('main.shield.cute.alexandra', {
            url: '/alexandra',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/alexandra.png" />',
            controller: function ($scope, $rootScope, alexandraServices) {
                $scope.name = alexandraServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.cute.alexandra";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Cute";
                $rootScope.url = "/cute/alexandra";
            }
        });
    }]);
})(cute || (cute = {}));
//# sourceMappingURL=states.js.map