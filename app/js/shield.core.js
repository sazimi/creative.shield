var Shield;
(function (Shield) {
    Shield.shield = angular.module('shield', ['ui.router', 'shield.common', 'oc.lazyLoad']);
    Shield.shield.run(['$rootScope', function ($rootScope) {
        $rootScope.navOpen = false;
        $rootScope.hasError = true;
    }]);
})(Shield || (Shield = {}));
//# sourceMappingURL=shield.js.map
var Shield;
(function (Shield) {
    Shield.shield.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            'abstract': true,
            template: '<ui-view />',
            onEnter: function () {
                console.log("on Enter: main");
            }
        }).state('main.shield', {
            url: '/',
            templateUrl: 'modules/common/first.html',
            onEnter: function () {
                console.log("on Enter: start");
            },
            resolve: {
                frontend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "frontend",
                        files: [
                            'modules/frontend/frontend.js',
                            'modules/frontend/states.js'
                        ]
                    });
                }
            },
            controller: function ($scope, $rootScope, $state) {
                $scope.nima = function () {
                    console.log('clicked!');
                    $state.go('.frontend.sherry');
                };
                $rootScope.hasError = false;
                $rootScope.stateName = "main.shield";
                $rootScope.status = !$rootScope.hasError;
                $rootScope.moduleName = "Shield";
                console.log('Main + Shield');
            }
        }).state('main.nima', {
            url: '/nima',
            template: 'Nima Sherry',
            onEnter: function () {
                console.log("on Enter: start");
            },
            controller: function ($state) {
                $state.go('^.shield.frontend.sherry');
            },
            resolve: {
                frontend: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "frontend",
                        files: ['modules/frontend/frontend.js']
                    });
                }
            }
        });
    }]);
})(Shield || (Shield = {}));
//# sourceMappingURL=states.js.map
var Common;
(function (Common) {
    Common.common = angular.module('shield.common', []);
    Common.common.factory('navigationServices', Common.Services.navigationServices);
    Common.common.directive('gnNavigationDirective', Common.Directive.navigationdirective);
})(Common || (Common = {}));
//# sourceMappingURL=common.js.map
var Common;
(function (Common) {
    var Navigation = (function () {
        function Navigation(title, state, icon, children) {
            this.title = title;
            this.state = state;
            this.icon = icon;
            this.children = children;
        }
        return Navigation;
    })();
    Common.Navigation = Navigation;
})(Common || (Common = {}));
//# sourceMappingURL=navigation.js.map
var Common;
(function (Common) {
    var Directive;
    (function (Directive) {
        Directive.navigationdirective = ['$compile', '$rootScope', '$interpolate', 'navigationServices', function ($compile, $rootScope, $interpolate, navigationServices) {
            return {
                restrict: 'A',
                replace: false,
                templateUrl: '/modules/common/navigation/navigation.html',
                link: function ($scope, iElement, iAttribute) {
                    $scope.$watch(navigationServices.getItems(), function (newValue, oldValue) {
                        $scope.items = navigationServices.getItems();
                    });
                }
            };
        }];
    })(Directive = Common.Directive || (Common.Directive = {}));
})(Common || (Common = {}));
//# sourceMappingURL=navigationDirective.js.map
var Common;
(function (Common) {
    var Services;
    (function (Services) {
        Services.navigationServices = [
            function () {
                return new NavigationServices();
            }
        ];
        var NavigationServices = (function () {
            function NavigationServices() {
                this.navigationList = [];
            }
            NavigationServices.prototype.setItem = function (item) {
                this.navigationList.push(item);
            };
            NavigationServices.prototype.getItems = function () {
                return this.navigationList;
            };
            return NavigationServices;
        })();
        Services.NavigationServices = NavigationServices;
    })(Services = Common.Services || (Common.Services = {}));
})(Common || (Common = {}));
//# sourceMappingURL=navigationServices.js.map