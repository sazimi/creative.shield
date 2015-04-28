var Mapper;
(function (Mapper) {
    Mapper.mapper = angular.module('shield.mapper', ['shield']);
    Mapper.mapper.run(['navigationServices', function (navigationServices) {
        var menu = new Common.Navigation();
        menu.title = "Mapper";
        menu.state = "main.shield.mapper.home";
        menu.children = new Array();
        menu.children.push(new Common.Navigation("Channel", "main.shield.mapper.channels"));
        menu.children.push(new Common.Navigation("Market", "main.shield.mapper.marktes", "", [new Common.Navigation('market 1', "main.shield.mapper.markets.detail")]));
        navigationServices.setItem(menu);
    }]);
})(Mapper || (Mapper = {}));
//# sourceMappingURL=mapper.js.map