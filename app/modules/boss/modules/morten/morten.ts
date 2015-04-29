/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="mortenServices.ts" />

module Morten {
    export var morten = angular.module('frontend.morten', []);

    // morten's factories
    morten.factory('mortenServices', frontend.morten.services.mortenServices);
}