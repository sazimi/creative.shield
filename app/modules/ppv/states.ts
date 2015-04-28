/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="ppv.ts" />

module ppv{

    ppv.config(['$stateProvider', '$urlRouterProvider', 
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    // $urlRouterProvider.otherwise('ppv/client');
    $stateProvider
    .state('main.ppv', {
        'abstract': true,
        template: '<ui-view />',
        })
    .state('main.ppv.home', {
        url: '/ppv/home',
        templateUrl: 'modules/ppv/views/channellist.html',
        onEnter: function(){
            console.log("on Enter: main.ppv.home");
            },
            controller: function($scope) {
                console.log('ppv + home');
                        // $scope.passed = 'passed!';
                    }
                    })
    ;
    }]);
}