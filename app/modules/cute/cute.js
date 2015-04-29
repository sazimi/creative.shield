var cute;
(function (_cute) {
    _cute.cute = angular.module('cute', ['shield']);
    _cute.cute.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Cute";
        menu.state = "main.shield.cute.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Miglena", "main.shield.cute.miglena", "miglena-small.png"));
        menu.children.push(new Common.Navigation("Alexandra", "main.shield.cute.alexandra", "alexandra-small.png"));
        navigationServices.setItem(menu);
    }]);
})(cute || (cute = {}));
//# sourceMappingURL=cute.js.map