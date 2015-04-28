var Mapper;
(function (Mapper) {
    var Controller;
    (function (Controller) {
        Controller.mapperController = ['$scope', 'navigationServices', function ($scope, navigationServices) {
            var menu = new Common.Navigation();
            menu.title = "Mapper";
            menu.state = "main.mapper.home";
            menu.children = new Array();
            menu.children.push(new Common.Navigation("Channel", "main.mapper.channels"));
            menu.children.push(new Common.Navigation("Market", "main.mapper.marktes", "", [new Common.Navigation('market 1', "main.mapper.markets.detail")]));
            navigationServices.setItem(menu);
        }];
    })(Controller = Mapper.Controller || (Mapper.Controller = {}));
})(Mapper || (Mapper = {}));
//# sourceMappingURL=mapperController.js.map