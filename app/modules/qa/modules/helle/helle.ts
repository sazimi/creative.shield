/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="helleServices.ts" />

module Helle {
    export var helle = angular.module('frontend.helle', ['booooo']);

    // helle's factories
    helle.factory('helleServices', frontend.helle.services.helleServices);
}
