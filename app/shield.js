var Shield;
(function (Shield) {
    Shield.shield = angular.module('shield', ['ui.router', 'shield.common', 'shield.mapper', 'oc.lazyLoad']);
    Shield.shield.run(['$rootScope', function ($rootScope) {
        $rootScope.navOpen = false;
        $rootScope.hasError = true;
    }]);
})(Shield || (Shield = {}));
//# sourceMappingURL=shield.js.map