/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="ppv.ts" />

module ppv{

ppv.config(['$stateProvider', '$$urlRouterProvider', 
    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('index.html');
    $stateProvider
      .state('free', {
        'bstract': true,
        template: '<ui-view />'
        });
    }]);
}