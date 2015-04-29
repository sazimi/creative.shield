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
                $rootScope.url = "/qa/home";
                console.log('qa + home');
            }
        }).state('main.shield.qa.helle', {
            url: '/helle',
            template: 'Hi, This is {{name}}! <br /> <img style="max-width: 500px" src="demo/images/helle.png" />',
            controller: function ($scope, $rootScope, helleServices) {
                $scope.name = helleServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.qa.helle";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "qa";
                $rootScope.url = "/qa/helle";
            }
        }).state('main.shield.qa.jesper', {
            url: '/jesper',
            template: 'Hi, This is {{name}}! <br /> <img style="max-width: 500px" src="demo/images/jesper.png" />',
            controller: function ($scope, $rootScope, jesperServices) {
                $scope.name = jesperServices.getName();
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield.qa.jesper";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "qa";
                $rootScope.url = "/qa/jesper";
            }
        });
    }]);
})(qa || (qa = {}));
//# sourceMappingURL=states.js.map