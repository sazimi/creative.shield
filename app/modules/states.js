/// <reference path="../typings/tsd.d.ts" />
/// <reference path="shield.ts" />
var Shield;
(function (Shield) {
    Shield.shield.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('start');
        $stateProvider.state('start', {
            url: '/start',
            template: "<a ui-sref='main.ppv.home'>ppv</a><br /> <a ui-sref='main.mapper.home'>mapper</a>",
            onEnter: function () {
                console.log("on Enter: start");
            }
        }).state('main', {
            'abstract': true,
            template: '<ui-view />',
            onEnter: function () {
                console.log("on Enter: main");
            }
        }).state('main.yek', {
            template: 'Sherry',
            onEnter: function () {
                console.log("on Enter: yek");
            }
        });
    }]);
})(Shield || (Shield = {}));

//# sourceMappingURL=states.js.map