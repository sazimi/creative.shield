var Common;
(function (Common) {
    Common.common = angular.module('shield.common', []);
    Common.common.factory('navigationServices', Common.Services.navigationServices);
    Common.common.directive('gnNavigationDirective', Common.Directive.navigationdirective);
})(Common || (Common = {}));
//# sourceMappingURL=common.js.map