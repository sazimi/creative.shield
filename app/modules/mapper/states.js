var Mapper;
(function (Mapper) {
    Mapper.mapper.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.mapper', {
            url: '/mapper',
            'abstract': true,
            template: '<ui-view />'
        }).state('main.shield.mapper.home', {
            url: '/home',
            templateUrl: 'modules/mapper/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.mapper.home.before");
                console.log("on Enter: main.shield.mapper.home.after");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.mapper.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Mapper";
                console.log('mapper + home');
            }
        }).state('main.shield.mapper.channels', {
            url: '/channels',
            template: 'Channels of Mapper'
        }).state('main.shield.mapper.markets', {
            url: '/markets',
            template: 'markets of Mapper'
        }).state('main.shield.mapper.markets.detail', {
            url: '/detail',
            template: 'details of markets of Mapper'
        });
    }]);
})(Mapper || (Mapper = {}));
//# sourceMappingURL=states.js.map