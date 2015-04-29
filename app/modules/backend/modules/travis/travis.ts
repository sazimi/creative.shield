/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="travisServices.ts" />

module Travis {
    export var travis = angular.module('frontend.travis', []);

    // travis's factories
    travis.factory('travisServices', frontend.travis.services.travisServices);
}