/// <reference path="../../../typings/tsd.d.ts" />

module ppv {
    export var ppv = angular.module('shield.ppv', ['shield']);

    ppv.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "PPV";
        menu.state = "main.shield.ppv.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Channel",
            "main.shield.ppv.channels"
            ));
        menu.children.push(new Common.Navigation(
            "Market",
            "main.shield.ppv.marktes",
            "",
            [ new Common.Navigation('market 1', "main.shield.ppv.markets.detail") ]
            ));        
        navigationServices.setItem(menu)
    }]);

}