var boss;
(function (boss) {
    boss.boss.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.boss', {
            'abstract': true,
            template: '<ui-view />',
            url: 'boss',
            resolve: {
                sherry: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "boss.morten",
                        files: [
                            'modules/boss/modules/morten/mortenServices.js',
                            'modules/boss/modules/morten/morten.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.boss.home', {
            url: '/home',
            templateUrl: 'modules/boss/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.boss.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.boss.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "boss";
                console.log('boss + home');
            }
        }).state('main.shield.boss.sherry', {
            url: '/sherry',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, sherryServices) {
                $scope.name = sherryServices.getName();
            }
        }).state('main.shield.boss.nima', {
            url: '/nima',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, nimaServices) {
                $scope.name = nimaServices.getName();
            }
        });
    }]);
})(boss || (boss = {}));
//# sourceMappingURL=states.js.map