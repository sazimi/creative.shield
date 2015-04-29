/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="frontend.ts" />

module frontend{

    frontend.config(['$stateProvider', '$urlRouterProvider', 
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider
    .state('main.shield.frontend', {
        'abstract': true,
        template: '<ui-view />',
        url: 'frontend',
        resolve: {
              sherry: function($ocLazyLoad) {
                  return $ocLazyLoad.load(
                  [{
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
                  }]
                  )
                }
            }
        })
    .state('main.shield.frontend.home', {
        url: '/home',
        templateUrl: 'modules/frontend/views/channellist.html',
        onEnter: function(){
            console.log("on Enter: main.shield.frontend.home");
            },
            controller: function($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.frontend.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend"; 
                console.log('frontend + home');
            }
    })
    .state('main.shield.frontend.sherry', {
        url: '/sherry',
        template: 'Hi, This is {{name}}!',
        controller: function($scope, sherryServices) {
            $scope.name = sherryServices.getName();
        }
    })
    .state('main.shield.frontend.nima', {
        url: '/nima',
        template: 'Hi, This is {{name}}!',
        controller: function($scope, nimaServices) {
            $scope.name = nimaServices.getName();
        }
    })
    ;
    }]);
}