var mapper;
(function (mapper) {
    mapper.mapper.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.mapper', {
            'abstract': true,
            template: '<ui-view />',
        }).state('main.mapper.home', {
            url: '/mapper/home',
            templateUrl: 'modules/mapper/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.mapper.home.before");
                throw "not implemented exception!";
                console.log("on Enter: main.mapper.home.after");
            },
            controller: function ($scope) {
                console.log('mapper + home');
            }
        });
    }]);
})(mapper || (mapper = {}));
//# sourceMappingURL=states.js.map