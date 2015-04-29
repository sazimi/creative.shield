/// <reference path="../../../typings/tsd.d.ts" />

module frontend {
    export var frontend = angular.module('frontend', ['shield']);

    frontend.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Frontend";
        menu.state = "main.shield.frontend.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Channel",
            "main.shield.frontend.channels"
            ));
        menu.children.push(new Common.Navigation(
            "Market",
            "main.shield.frontend.marktes",
            "",
            [ new Common.Navigation('market 1', "main.shield.frontend.markets.detail") ]
            ));        
        navigationServices.setItem(menu)
    }]);

}
