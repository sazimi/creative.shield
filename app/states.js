var Shield;
(function (Shield) {
    Shield.shield.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            'abstract': true,
            template: '<ui-view />',
            onEnter: function () {
                console.log("on Enter: main");
            }
        }).state('main.shield', {
            url: '/',
            templateUrl: 'modules/common/first.html',
            onEnter: function () {
                console.log("on Enter: start");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Shield";
                console.log('Main + Shield');
            }
        });
    }]);
})(Shield || (Shield = {}));
//# sourceMappingURL=states.js.map