var supremeleader;
(function (supremeleader) {
    supremeleader.supremeleader.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.supremeleader', {
            'abstract': true,
            template: '<ui-view />',
            url: 'supremeleader',
            resolve: {
                sherry: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "supremeleader.jonatan",
                        files: [
                            'modules/supremeleader/modules/jonatan/jonatanServices.js',
                            'modules/supremeleader/modules/jonatan/jonatan.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.supremeleader.home', {
            url: '/home',
            templateUrl: 'modules/supremeleader/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.supremeleader.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.supremeleader.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "supremeleader";
                console.log('supremeleader + home');
            }
        }).state('main.shield.supremeleader.jonatan', {
            url: '/jonatan',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, jonatanServices) {
                $scope.name = jonatanServices.getName();
            }
        });
    }]);
})(supremeleader || (supremeleader = {}));
//# sourceMappingURL=states.js.map