/// <reference path="../../../typings/tsd.d.ts" />

module supremeleader {
    export var supremeleader = angular.module('supremeleader', ['shield']);

    supremeleader.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Supremeleader";
        menu.state = "main.shield.supremeleader.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Jonatan",
            "main.shield.supremeleader.jonatan",
            "jonatan-small.jpeg"
            ));
        navigationServices.setItem(menu)
    }]);

}
