var frontend;
(function (frontend) {
    var helle;
    (function (helle) {
        var services;
        (function (services) {
            services.helleServices = [function () {
                return new HelleServices();
            }];
            var HelleServices = (function () {
                function HelleServices() {
                }
                HelleServices.prototype.getName = function () {
                    return 'Helle Kibsgaard';
                };
                return HelleServices;
            })();
            services.HelleServices = HelleServices;
        })(services = helle.services || (helle.services = {}));
    })(helle = frontend.helle || (frontend.helle = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=helleServices.js.map