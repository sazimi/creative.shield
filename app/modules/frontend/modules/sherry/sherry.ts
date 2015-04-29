/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="sherryServices.ts" />

module Sherry {
    export var sherry = angular.module('frontend.sherry', []);

    // Sherry's factories
    sherry.factory('sherryServices', frontend.sherry.services.sherryServices);
}