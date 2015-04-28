/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="navigation/navigationServices.ts" />
/// <reference path="navigation/navigationDirective.ts" />

module Common {

    export var common = angular.module('shield.common', []);

    //Common's factories
    common.factory('navigationServices', Services.navigationServices);

    //Common's directives
    common.directive('gnNavigationDirective', Directive.navigationdirective);


}