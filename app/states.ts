/// <reference path="../typings/tsd.d.ts" />
/// <reference path="shield.ts" />

module Shield{

shield.config(['$stateProvider', '$$urlRouterProvider', 
	($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('index.html');
    $stateProvider
      .state('free', {
        'bstract': true,
        template: '<ui-view />'
        });
    }]);
}