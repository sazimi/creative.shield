var frontend;
(function (_frontend) {
    _frontend.frontend = angular.module('frontend', ['shield']);
    _frontend.frontend.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Frontend";
        menu.state = "main.shield.frontend.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Channel", "main.shield.frontend.channels"));
        menu.children.push(new Common.Navigation("Market", "main.shield.frontend.marktes", "", [new Common.Navigation('market 1', "main.shield.frontend.markets.detail")]));
        navigationServices.setItem(menu);
    }]);
})(frontend || (frontend = {}));
//# sourceMappingURL=frontend.js.map
var frontend;
(function (frontend) {
    frontend.frontend.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.shield.frontend', {
            'abstract': true,
            template: '<ui-view />',
            url: 'frontend',
            resolve: {
                sherry: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: "frontend.sherry",
                        files: [
                            'modules/frontend/modules/sherry/sherryServices.js',
                            'modules/frontend/modules/sherry/sherry.js'
                        ]
                    }, {
                        name: "frontend.nima",
                        files: [
                            'modules/frontend/modules/nima/nimaServices.js',
                            'modules/frontend/modules/nima/nima.js'
                        ]
                    }]);
                }
            }
        }).state('main.shield.frontend.home', {
            url: '/home',
            templateUrl: 'modules/frontend/views/channellist.html',
            onEnter: function () {
                console.log("on Enter: main.shield.frontend.home");
            },
            controller: function ($scope, $rootScope) {
                $rootScope.hasError = true;
                $rootScope.stateName = "main.shield.frontend.home";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "frontend";
                console.log('frontend + home');
            }
        }).state('main.shield.frontend.sherry', {
            url: '/sherry',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, sherryServices) {
                $scope.name = sherryServices.getName();
            }
        }).state('main.shield.frontend.nima', {
            url: '/nima',
            template: 'Hi, This is {{name}}!',
            controller: function ($scope, nimaServices) {
                $scope.name = nimaServices.getName();
            }
        });
    }]);
})(frontend || (frontend = {}));
//# sourceMappingURL=states.js.map
var Nima;
(function (Nima) {
    Nima.nima = angular.module('frontend.nima', []);
    Nima.nima.factory('nimaServices', frontend.nima.services.nimaServices);
})(Nima || (Nima = {}));
//# sourceMappingURL=nima.js.map
var frontend;
(function (frontend) {
    var nima;
    (function (nima) {
        var services;
        (function (services) {
            services.nimaServices = [function () {
                return new NimaServices();
            }];
            var NimaServices = (function () {
                function NimaServices() {
                }
                NimaServices.prototype.getName = function () {
                    return 'Nima Zahedi';
                };
                return NimaServices;
            })();
            services.NimaServices = NimaServices;
        })(services = nima.services || (nima.services = {}));
    })(nima = frontend.nima || (frontend.nima = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=nimaServices.js.map
var Sherry;
(function (Sherry) {
    Sherry.sherry = angular.module('frontend.sherry', []);
    Sherry.sherry.factory('sherryServices', frontend.sherry.services.sherryServices);
})(Sherry || (Sherry = {}));
//# sourceMappingURL=sherry.js.map
var frontend;
(function (frontend) {
    var sherry;
    (function (sherry) {
        var services;
        (function (services) {
            services.sherryServices = [function () {
                return new SherryServices();
            }];
            var SherryServices = (function () {
                function SherryServices() {
                }
                SherryServices.prototype.getName = function () {
                    return 'Sherry Aziminia';
                };
                return SherryServices;
            })();
            services.SherryServices = SherryServices;
        })(services = sherry.services || (sherry.services = {}));
    })(sherry = frontend.sherry || (frontend.sherry = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=sherryServices.js.map