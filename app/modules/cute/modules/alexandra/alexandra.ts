/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="alexandraServices.ts" />

module Alexandra {
    export var alexandra = angular.module('frontend.alexandra', []);

    // alexandra's factories
    alexandra.factory('alexandraServices', frontend.alexandra.services.alexandraServices);
}