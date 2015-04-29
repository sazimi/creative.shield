/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="navigationServices.ts" />

module Common.Directive {
    export var navigationdirective = ['$compile', '$rootScope', '$interpolate', 'navigationServices', 
        ($compile: ng.ICompileService, $rootScope: ng.IRootScopeService, $interpolate: ng.IInterpolateService, navigationServices: Services.NavigationServices) => {
        return {
            restrict: 'A',
            replace: false,
            templateUrl: '/modules/common/navigation/navigation.html',
            link: ($scope, iElement, iAttribute) => {

                $scope.$watch(navigationServices.getItems(), (newValue, oldValue) => {
                    var result = navigationServices.getItems();
                    if(angular.isDefined(result)) {
                        $scope.items = result;
                    }
                });    
            }
        }
    }]
}