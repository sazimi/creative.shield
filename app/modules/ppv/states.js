var ppv;
(function (ppv) {
    ppv.ppv.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.ppv', {
            'abstract': true,
            template: '<ui-view />',
        }).state('main.ppv.home', {
            url: '/ppv/home',
            templateUrl: 'modules/ppv/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.ppv.home");
            },
            controller: function ($scope) {
                console.log('ppv + home');
            }
        });
    }]);
})(ppv || (ppv = {}));
//# sourceMappingURL=states.js.map