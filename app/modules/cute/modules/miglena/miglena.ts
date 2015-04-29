/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="miglenaServices.ts" />

module Miglena {
    export var miglena = angular.module('frontend.miglena', []);

    // miglena's factories
    miglena.factory('miglenaServices', frontend.miglena.services.miglenaServices);
}