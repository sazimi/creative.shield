var Common;
(function (Common) {
    var Directive;
    (function (Directive) {
        Directive.navigationdirective = ['$compile', '$rootScope', '$interpolate', 'navigationServices', function ($compile, $rootScope, $interpolate, navigationServices) {
            return {
                restrict: 'A',
                replace: false,
                templateUrl: '/modules/common/navigation/navigation.html',
                link: function ($scope, iElement, iAttribute) {
                    $scope.$watch(navigationServices.getItems(), function (newValue, oldValue) {
                        var result = navigationServices.getItems();
                        if (angular.isDefined(result)) {
                            $scope.items = result;
                        }
                    });
                }
            };
        }];
    })(Directive = Common.Directive || (Common.Directive = {}));
})(Common || (Common = {}));
//# sourceMappingURL=navigationDirective.js.map