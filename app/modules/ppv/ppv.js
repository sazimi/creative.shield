var ppv;
(function (_ppv) {
    _ppv.ppv = angular.module('shield.ppv', ['shield']);
    _ppv.ppv.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "PPV";
        menu.state = "main.shield.ppv.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Channel", "main.shield.ppv.channels"));
        menu.children.push(new Common.Navigation("Market", "main.shield.ppv.marktes", "", [new Common.Navigation('market 1', "main.shield.ppv.markets.detail")]));
        navigationServices.setItem(menu);
    }]);
})(ppv || (ppv = {}));
//# sourceMappingURL=ppv.js.map