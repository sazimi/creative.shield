/// <reference path="../typings/tsd.d.ts" />
/// <reference path="shield.ts" />

module Shield{

shield.config(['$stateProvider', '$urlRouterProvider',
	($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
          'abstract': true,
          template: '<ui-view />',
          onEnter: function(){
                console.log("on Enter: main");
              }
        })
        .state('main.shield', {
            url: '/',
            templateUrl: 'modules/common/first.html',
            onEnter: function(){
              console.log("on Enter: start");
            },
            controller: function($scope, $rootScope) {
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Shield"; 
                console.log('Main + Shield');
            }
            })
      ;
    }]);
}