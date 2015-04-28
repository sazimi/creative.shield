/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../common/navigation/navigationServices.ts" />
/// <reference path="../common/navigation/navigation.ts" />
/// <reference path="mapperController.ts" />

module Mapper {
    export var mapper = angular.module('shield.mapper', ['shield']);

    mapper.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Mapper";
        menu.state = "main.shield.mapper.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Channel",
            "main.shield.mapper.channels"
            ));
        menu.children.push(new Common.Navigation(
            "Market",
            "main.shield.mapper.marktes",
            "",
            [ new Common.Navigation('market 1', "main.shield.mapper.markets.detail") ]
            ));
        
        navigationServices.setItem(menu)
    }]);

    //Mappe's Controller

}