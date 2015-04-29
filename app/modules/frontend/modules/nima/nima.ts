/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="nimaServices.ts" />

module Nima {
    export var nima = angular.module('frontend.nima', []);

    // Nima's factories
    nima.factory('nimaServices', frontend.nima.services.nimaServices);
}