var supremeleader;
(function (_supremeleader) {
    _supremeleader.supremeleader = angular.module('supremeleader', ['shield']);
    _supremeleader.supremeleader.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Supremeleader";
        menu.state = "main.shield.supremeleader.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Jonatan", "main.shield.supremeleader.jonatan", "jonatan-small.jpeg"));
        navigationServices.setItem(menu);
    }]);
})(supremeleader || (supremeleader = {}));
//# sourceMappingURL=supremeleader.js.map