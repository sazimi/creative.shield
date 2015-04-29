/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="backend.ts" />

module backend{

    backend.config(['$stateProvider', '$urlRouterProvider', 
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider
    .state('main.shield.backend', {
        'abstract': true,
        template: '<ui-view />',
        url: 'backend',
        resolve: {
              backend: function($ocLazyLoad) {
                  return $ocLazyLoad.load(
                  [{
                    name: "backend.kim",
                    files: [
                        'modules/backend/modules/kim/kimServices.js',
                        'modules/backend/modules/kim/kim.js'
                        ]
                  },
                  {
                    name: "backend.travis",
                    files: [
                        'modules/backend/modules/travis/travisServices.js',
                        'modules/backend/modules/travis/travis.js'
                        ]
                  },
                  {
                    name: "backend.hristo",
                    files: [
                        'modules/backend/modules/hristo/hristoServices.js',
                        'modules/backend/modules/hristo/hristo.js'
                        ]
                  },
                  {
                    name: "backend.sebastian",
                    files: [
                        'modules/backend/modules/sebastian/sebastianServices.js',
                        'modules/backend/modules/sebastian/sebastian.js'
                        ]
                  }]
                  )
                }
            }
        })
    .state('main.shield.backend.home', {
        url: '/home',
        templateUrl: 'modules/backend/views/channellist.html',
        onEnter: function(){
            console.log("on Enter: main.shield.backend.home");
            },
            controller: function($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.backend.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "backend"; 
                $rootScope.url = "/backend/home";
                console.log('backend + home');
            }
    })
    .state('main.shield.backend.travis', {
        url: '/travis',
        template: 'Hi, This is {{name}}! <br /> <img src="demo/images/travis.jpeg" />',
        controller: function($scope, $rootScope, travisServices) {
            $scope.name = travisServices.getName();
            $rootScope.hasError = false;
            $rootScope.stateName = "main.shield.backend.travis";
            $rootScope.status = !$rootScope.hasError;
            $rootScope.moduleName = "backend";
            $rootScope.url = "/backend/travis"
        }
    })
    .state('main.shield.backend.kim', {
        url: '/kim',
        template: 'Hi, This is {{name}}! <br /> <img src="demo/images/kim.jpeg" />',
        controller: function($scope, $rootScope, kimServices) {
            $scope.name = kimServices.getName();
            $rootScope.hasError = false;
            $rootScope.stateName = "main.shield.backend.kim";
            $rootScope.status = !$rootScope.hasError;
            $rootScope.moduleName = "backend";
            $rootScope.url = "/backend/kim"
        }
    })
    .state('main.shield.backend.hristo', {
        url: '/hristo',
        template: 'Hi, This is {{name}}! <br /> <img src="demo/images/hristo.jpeg" />',
        controller: function($scope, $rootScope, hristoServices) {
            $scope.name = hristoServices.getName();
            $rootScope.hasError = true;
            $rootScope.stateName = "main.shield.backend.hristo";
            $rootScope.status = !$rootScope.hasError;
            $rootScope.moduleName = "backend";
            $rootScope.url = "/backend/hristo"
        }
    })
    .state('main.shield.backend.sebastian', {
        url: '/sebastian',
        template: 'Hi, This is {{name}}! <br /> <img src="demo/images/sebastian.jpeg" />',
        controller: function($scope, $rootScope, sebastianServices) {
            $scope.name = sebastianServices.getName();
            $rootScope.hasError = false;
            $rootScope.stateName = "main.shield.backend.sebastian";
            $rootScope.status = !$rootScope.hasError;
            $rootScope.moduleName = "backend";
            $rootScope.url = "/backend/sebastian"
        }
    })
    ;
    }]);
}