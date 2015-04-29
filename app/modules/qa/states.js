var qa;
(function (qa) {
    qa.qa.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.qa', {
            'abstract': true,
            template: '<ui-view />',
            url: 'qa',
            resolve: {
                qa: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "qa.helle",
                        files: [
                            'modules/qa/modules/helle/helleServices.js',
                            'modules/qa/modules/helle/helle.js'
                        ]
                    }, {
                        name: "qa.jesper",
                        files: [
                            'modules/qa/modules/jesper/jesperServices.js',
                            'modules/qa/modules/jesper/jesper.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.qa.home', {
            url: '/home',
            templateUrl: 'modules/qa/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.qa.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.qa.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "qa";
                console.log('qa + home');
            }
        }).state('main.shield.qa.helle', {
            url: '/helle',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, helleServices) {
                $scope.name = helleServices.getName();
            }
        }).state('main.shield.qa.jesper', {
            url: '/jesper',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, jesperServices) {
                $scope.name = jesperServices.getName();
            }
        });
    }]);
})(qa || (qa = {}));
//# sourceMappingURL=states.js.map