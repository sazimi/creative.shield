/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="hristoServices.ts" />

module Hristo {
    export var hristo = angular.module('frontend.hristo', []);

    // hristo's factories
    hristo.factory('hristoServices', frontend.hristo.services.hristoServices);
}