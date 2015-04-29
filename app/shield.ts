/// <reference path="../typings/tsd.d.ts" />

module Shield {
  export var shield = angular.module('shield', ['ui.router', 'shield.common', 'oc.lazyLoad']);

  shield.run(['$rootScope', ($rootScope) => {
      $rootScope.navOpen = false;
      $rootScope.hasError = true;
  }]);

  //Shield's factories

  //Shield's controllers

  //Shield's directives

  //Shield's filter

}