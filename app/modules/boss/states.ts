/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="boss.ts" />

module boss{

    boss.config(['$stateProvider', '$urlRouterProvider', 
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider
    .state('main.shield.boss', {
        'abstract': true,
        template: '<ui-view />',
        url: 'boss',
        resolve: {
              boss: function($ocLazyLoad) {
                  return $ocLazyLoad.load(
                  [{
                    name: "boss.morten",
                    files: [
                        'modules/boss/modules/morten/mortenServices.js',
                        'modules/boss/modules/morten/morten.js'
                        ]
                  }]
                  )
                }
            }
        })
    .state('main.shield.boss.home', {
        url: '/home',
        templateUrl: 'modules/boss/views/channellist.html',
        onEnter: function(){
            console.log("on Enter: main.shield.boss.home");
            },
            controller: function($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.boss.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Boss"; 
                $rootScope.url = "/boss/home";
                console.log('boss + home');
            }
    })
    .state('main.shield.boss.morten', {
        url: '/morten',
        template: 'Hi, This is {{name}}! <br /> <img src="demo/images/morten.png" />',
        controller: function($scope, $rootScope, mortenServices) {
            $scope.name = mortenServices.getName();
            $rootScope.hasError = true;
            $rootScope.stateName = "main.shield.boss.morten";
            $rootScope.status = !$rootScope.hasError;
            $rootScope.moduleName = "Boss";
            $rootScope.url = "/boss/morten"
        }
    })
    ;
    }]);
}