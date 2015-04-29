var qa;
(function (_qa) {
    _qa.qa = angular.module('qa', ['shield']);
    _qa.qa.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "QA";
        menu.state = "main.shield.qa.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Helle", "main.shield.qa.helle", "helle-small.png"));
        menu.children.push(new Common.Navigation("Jesper", "main.shield.qa.jesper", "jesper-small.png"));
        navigationServices.setItem(menu);
    }]);
})(qa || (qa = {}));
//# sourceMappingURL=qa.js.map