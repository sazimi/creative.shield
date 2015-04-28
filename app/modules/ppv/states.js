var ppv;
(function (ppv) {
    ppv.ppv.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.ppv', {
            'abstract': true,
            template: '<ui-view />',
        }).state('main.shield.ppv.home', {
            url: '/ppv/home',
            templateUrl: 'modules/ppv/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.ppv.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.ppv.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "PPV";
                console.log('ppv + home');
            }
        }).state('main.shield.ppv.channels', {
            url: '/channels',
            templateUrl: 'Channels of ppv'
        }).state('main.shield.ppv.markets', {
            url: '/markets',
            templateUrl: 'markets of ppv'
        }).state('main.shield.ppv.markets.detail', {
            url: '/detail',
            templateUrl: 'details of markets of ppv'
        });
    }]);
})(ppv || (ppv = {}));
//# sourceMappingURL=states.js.map