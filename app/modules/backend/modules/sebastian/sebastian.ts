/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="sebastianServices.ts" />

module Sebastian {
    export var sebastian = angular.module('frontend.sebastian', []);

    // sebastian's factories
    sebastian.factory('sebastianServices', frontend.sebastian.services.sebastianServices);
}