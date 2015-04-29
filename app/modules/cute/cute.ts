/// <reference path="../../../typings/tsd.d.ts" />

module cute {
    export var cute = angular.module('cute', ['shield']);

    cute.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Cute";
        menu.state = "main.shield.cute.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Miglena",
            "main.shield.cute.miglena",
            "miglena-small.png"
            ));
        menu.children.push(new Common.Navigation(
            "Alexandra",
            "main.shield.cute.alexandra",
            "alexandra-small.png"
            ));        
        navigationServices.setItem(menu)
    }]);

}
