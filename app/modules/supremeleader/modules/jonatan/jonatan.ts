/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="jonatanServices.ts" />

module Jonatan {
    export var jonatan = angular.module('frontend.jonatan', []);

    // jonatan's factories
    jonatan.factory('jonatanServices', frontend.jonatan.services.jonatanServices);
}