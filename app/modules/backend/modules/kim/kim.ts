/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="kimServices.ts" />

module Kim {
    export var kim = angular.module('frontend.kim', []);

    // kim's factories
    kim.factory('kimServices', frontend.kim.services.kimServices);
}