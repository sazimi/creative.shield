/// <reference path="../../../typings/tsd.d.ts" />

module qa {
    export var qa = angular.module('qa', ['shield']);

    qa.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "QA";
        menu.state = "main.shield.qa.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Helle",
            "main.shield.qa.helle",
            "helle-small.png"
            ));
        menu.children.push(new Common.Navigation(
            "Jesper",
            "main.shield.qa.jesper",
            "jesper-small.png"
            ));
        navigationServices.setItem(menu)
    }]);

}
