/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../common/navigation/navigationServices.ts" />

module Mapper.Controller {

    export var mapperController = ['$scope', 'navigationServices', ($scope, navigationServices: Common.Services.NavigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Mapper";
        menu.state = "main.mapper.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Channel",
            "main.mapper.channels"
            ));
        menu.children.push(new Common.Navigation(
            "Market",
            "main.mapper.marktes",
            "",
            [ new Common.Navigation('market 1', "main.mapper.markets.detail") ]
            ));
        
        navigationServices.setItem(menu)

    }];
    
}