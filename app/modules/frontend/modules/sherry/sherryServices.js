var frontend;
(function (frontend) {
    var sherry;
    (function (sherry) {
        var services;
        (function (services) {
            services.sherryServices = [function () {
                return new SherryServices();
            }];
            var SherryServices = (function () {
                function SherryServices() {
                }
                SherryServices.prototype.getName = function () {
                    return 'Sherry Aziminia';
                };
                return SherryServices;
            })();
            services.SherryServices = SherryServices;
        })(services = sherry.services || (sherry.services = {}));
    })(sherry = frontend.sherry || (frontend.sherry = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=sherryServices.js.map