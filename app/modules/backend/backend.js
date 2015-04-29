var backend;
(function (_backend) {
    _backend.backend = angular.module('backend', ['shield']);
    _backend.backend.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Backend";
        menu.state = "main.shield.backend.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Travis", "main.shield.backend.travis", "travis-small.jpeg"));
        menu.children.push(new Common.Navigation("Kim", "main.shield.backend.kim", "kim-small.jpeg"));
        menu.children.push(new Common.Navigation("Hristo", "main.shield.backend.hristo", "hristo-small.jpeg"));
        menu.children.push(new Common.Navigation("Sebastian", "main.shield.backend.sebastian", "sebastian-small.jpeg"));
        navigationServices.setItem(menu);
    }]);
})(backend || (backend = {}));
//# sourceMappingURL=backend.js.map