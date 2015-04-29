var frontend;
(function (_frontend) {
    _frontend.frontend = angular.module('frontend', ['shield']);
    _frontend.frontend.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Frontend";
        menu.state = "main.shield.frontend.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Nima", "main.shield.frontend.nima", "nima-small.png"));
        menu.children.push(new Common.Navigation("Sherry", "main.shield.frontend.sherry", "sherry-small.jpeg"));
        menu.children.push(new Common.Navigation("Emil", "main.shield.frontend.emil", "emil-small.jpeg"));
        menu.children.push(new Common.Navigation("Jens", "main.shield.frontend.jens", "jens-small.png"));
        navigationServices.setItem(menu);
    }]);
})(frontend || (frontend = {}));
//# sourceMappingURL=frontend.js.map