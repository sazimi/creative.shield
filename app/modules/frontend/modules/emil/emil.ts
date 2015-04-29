/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="emilServices.ts" />

module Emil {
    export var emil = angular.module('frontend.emil', []);

    // Emil's factories
    emil.factory('emilServices', frontend.emil.services.emilServices);
}