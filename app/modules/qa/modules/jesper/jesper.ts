/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="jesperServices.ts" />

module Jesper {
    export var jesper = angular.module('frontend.jesper', []);

    // jesper's factories
    jesper.factory('jesperServices', frontend.jesper.services.jesperServices);
}