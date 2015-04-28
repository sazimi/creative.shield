/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="navigationServices.ts" />

module Common.Directive {
    export var navigationdirective = ['$compile', '$rootScope', '$interpolate', 'navigationServices', 
        ($compile: ng.ICompileService, $rootScope: ng.IRootScopeService, $interpolate: ng.IInterpolateService, navigationServices: Services.NavigationServices) => {
        return {
            restrict: 'A',
            replace: false,
            templateUrl: '/modules/common/navigation/navigation.html',
            // template: 
            //     '<div class="scaffold">' +
            //         '<!-- navigation header -->'+
            //         '<div class="scaffold-bar scaffold-bar-default">' +
            //             '<div class="col-xs-12 flex">' +
            //                 '<button' +
            //                     'ng-click="$rootScope.navOpen =  !$rootScope.navOpen"' +
            //                     'class="btn btn-clear-brand flex-middle reset-padding-left">' +
            //                         '<span class="nedicon-drag_small inline-space flex-middle"></span>' +
            //                         '<span class="inline-space flex-middle">SHIELD</span>' +
            //                 '</button>' +
            //             '</div>' +
            //         '</div>' +
            //         '<!-- Navigation content (menu items etc.) -->' +
            //         '<div class="scaffold-view">' +
            //             '<div class="scaffold-content">' +
            //                 '<ul class="nav nav-stacked nav-pills block-list"></ul>' +
            //         '</div>' +
            //     '</div>',
            link: ($scope, iElement, iAttribute) => {

                $scope.$watch(navigationServices.getItems(), (newValue, oldValue) => {
                    $scope.items = navigationServices.getItems();
                    });
                // var elementTemplate = 
                //     '<li' +
                //         'role="presentation"' +
                //         'ng-class="{\'active\': $state.includes({{state}})}">' +
                //         '<a href ui-sref="state">' +
                //         '<span class="element">{{title}}</span>' +
                //         '</a>' +
                //     '</li>';
                
                // var navElement = iElement.find('ul.nav');

                // function addSubMenu(parentElement, nav, level) {

                // }

                // scope.$watch(() => navigationServices.getItems(), (newVal: Common.Navigation) => {
                //     navElement.empty();


                //     angular.forEach(newVal, (item: Common.Navigation) => {
                //         angular.forEach(item, (menuItem: Common.Navigation) => {
                //             addSubMenu(navElement, menuItem, 0);
                //         });
                //     });
                //     $compile(navElement)(scope);
                // }, true);

            }
        }
    }]
}