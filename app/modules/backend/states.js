var backend;
(function (backend) {
    backend.backend.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.backend', {
            'abstract': true,
            template: '<ui-view />',
            url: 'backend',
            resolve: {
                backend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "backend.kim",
                        files: [
                            'modules/backend/modules/kim/kimServices.js',
                            'modules/backend/modules/kim/kim.js'
                        ]
                    }, {
                        name: "backend.travis",
                        files: [
                            'modules/backend/modules/travis/travisServices.js',
                            'modules/backend/modules/travis/travis.js'
                        ]
                    }, {
                        name: "backend.hristo",
                        files: [
                            'modules/backend/modules/hristo/hristoServices.js',
                            'modules/backend/modules/hristo/hristo.js'
                        ]
                    }, {
                        name: "backend.sebastian",
                        files: [
                            'modules/backend/modules/sebastian/sebastianServices.js',
                            'modules/backend/modules/sebastian/sebastian.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.backend.home', {
            url: '/home',
            templateUrl: 'modules/backend/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.backend.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.backend.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "backend";
                console.log('backend + home');
            }
        }).state('main.shield.backend.travis', {
            url: '/travis',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/travis.png" />',
            controller: function ($scope, travisServices) {
                $scope.name = travisServices.getName();
            }
        }).state('main.shield.backend.kim', {
            url: '/kim',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/kim.png" />',
            controller: function ($scope, kimServices) {
                $scope.name = kimServices.getName();
            }
        }).state('main.shield.backend.hristo', {
            url: '/hristo',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/hristo.png" />',
            controller: function ($scope, hristoServices) {
                $scope.name = hristoServices.getName();
            }
        }).state('main.shield.backend.sebastian', {
            url: '/sebastian',
            template: 'Hi, This is {{name}}! <br /> <img src="demo/images/sebastian.png" />',
            controller: function ($scope, sebastianServices) {
                $scope.name = sebastianServices.getName();
            }
        });
    }]);
})(backend || (backend = {}));
//# sourceMappingURL=states.js.map