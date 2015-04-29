/// <reference path="../../../typings/tsd.d.ts" />


module backend {
    export var backend = angular.module('backend', ['shield']);

    backend.run(['navigationServices', (navigationServices) => {
        var menu = new Common.Navigation();
        menu.title = "Backend";
        menu.state = "main.shield.backend.home";
        menu.children = new Array<Common.Navigation>();
        menu.children.push(new Common.Navigation(
            "Travis",
            "main.shield.backend.travis",
            "travis-small.jpeg"
            ));
        menu.children.push(new Common.Navigation(
            "Kim",
            "main.shield.backend.kim",
            "kim-small.jpeg"
            ));
        menu.children.push(new Common.Navigation(
            "Hristo",
            "main.shield.backend.hristo",
            "hristo-small.jpeg"
            )); 
        menu.children.push(new Common.Navigation(
            "Sebastian",
            "main.shield.backend.sebastian",
            "sebastian-small.jpeg"
            ));        
        navigationServices.setItem(menu)
    }]);

}
