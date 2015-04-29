/// <reference path="../../../typings/tsd.d.ts" />

module boss {
    export var boss = angular.module('boss', ['shield']);

    boss.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Boss";
        menu.state = "main.shield.boss.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Morten",
            "main.shield.boss.morten",
            "morten-small.png"
            ));
        navigationServices.setItem(menu)
    }]);

}
