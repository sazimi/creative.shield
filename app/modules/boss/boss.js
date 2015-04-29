var boss;
(function (_boss) {
    _boss.boss = angular.module('boss', ['shield']);
    _boss.boss.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Boss";
        menu.state = "main.shield.boss.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Morten", "main.shield.boss.morten", "morten-small.png"));
        navigationServices.setItem(menu);
    }]);
})(boss || (boss = {}));
//# sourceMappingURL=boss.js.map