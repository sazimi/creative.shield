var frontend;
(function (_frontend) {
    _frontend.frontend = angular.module('frontend', ['shield']);
    _frontend.frontend.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Frontend";
        menu.state = "main.shield.frontend.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Channel", "main.shield.frontend.channels"));
        menu.children.push(new Common.Navigation("Market", "main.shield.frontend.marktes", "", [new Common.Navigation('market 1', "main.shield.frontend.markets.detail")]));
        navigationServices.setItem(menu);
    }]);
})(frontend || (frontend = {}));
//# sourceMappingURL=frontend.js.map