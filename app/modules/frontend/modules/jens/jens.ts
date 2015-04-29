/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="jensServices.ts" />

module Jens {
    export var jens = angular.module('frontend.jens', []);

    // jens's factories
    jens.factory('jensServices', frontend.jens.services.jensServices);
}