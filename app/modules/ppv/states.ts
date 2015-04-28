/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="ppv.ts" />

module ppv{

    ppv.config(['$stateProvider', '$urlRouterProvider', 
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    // $urlRouterProvider.otherwise('ppv/client');
    $stateProvider
    .state('main.shield.ppv', {
        'abstract': true,
        template: '<ui-view />',
        })
    .state('main.shield.ppv.home', {
        url: '/ppv/home',
        templateUrl: 'modules/ppv/views/channellist.html',
        onEnter: function(){
            console.log("on Enter: main.shield.ppv.home");
            },
            controller: function($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.ppv.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "PPV"; 
                console.log('ppv + home');
            }
        })
    .state('main.shield.ppv.channels', {
        url: '/channels',
        templateUrl: 'Channels of ppv'
        })
    .state('main.shield.ppv.markets', {
        url: '/markets',
        templateUrl: 'markets of ppv'
        })
    .state('main.shield.ppv.markets.detail', {
        url: '/detail',
        templateUrl: 'details of markets of ppv'
        });
    }]);
}