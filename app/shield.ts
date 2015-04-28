/// <reference path="../typings/tsd.d.ts" />

module Shield {
  export var shield = angular.module('shield', ['ui.router', 'shield.ppv', 'shield.mapper']);
  console.log(4);

  //run

// shield.config(['$stateProvider', '$urlRouterProvider',
//     ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

//     //$urlRouterProvider.otherwise('ppv/client');
//     $stateProvider
//         .state('start', {
//             url: '/start',
//             template: "<a ui-sref='main.ppvClient'>ppv</a>",
//             onEnter: function(){
//               console.log("on Enter: start");
//             }
//             })
//       .state('main', {
//         'abstract': true,
//         template: '<ui-view />',
//         onEnter: function()b{
//               console.log("on Enter: main");
//             }
//         })
//       .state('main.yek', {
//         template: 'Sherry',
//         onEnter: function(){
//               console.log("on Enter: yek");
//             }
//         })
//       ;
//     }]);

  // shield.controller('shieldController', ($scope, $state) => {
  //     $scope.test = 'shield';
  //     console.log('shield');
  //     //$state.go('main.ppvClient');
  //     });



  //Shield's factories

  //Shield's controllers

  //Shield's directives

  //Shield's filter

}
