var Common;
(function (Common) {
    var Services;
    (function (Services) {
        Services.navigationServices = [
            function () {
                return new NavigationServices();
            }
        ];
        var NavigationServices = (function () {
            function NavigationServices() {
                this.navigationList = [];
            }
            NavigationServices.prototype.setItem = function (item) {
                this.navigationList.push(item);
            };
            NavigationServices.prototype.getItems = function () {
                return this.navigationList;
            };
            return NavigationServices;
        })();
        Services.NavigationServices = NavigationServices;
    })(Services = Common.Services || (Common.Services = {}));
})(Common || (Common = {}));
//# sourceMappingURL=navigationServices.js.map