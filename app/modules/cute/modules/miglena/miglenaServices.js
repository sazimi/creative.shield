var frontend;
(function (frontend) {
    var miglena;
    (function (miglena) {
        var services;
        (function (services) {
            services.miglenaServices = [function () {
                return new MiglenaServices();
            }];
            var MiglenaServices = (function () {
                function MiglenaServices() {
                }
                MiglenaServices.prototype.getName = function () {
                    return 'Miglena Zlatanova';
                };
                return MiglenaServices;
            })();
            services.MiglenaServices = MiglenaServices;
        })(services = miglena.services || (miglena.services = {}));
    })(miglena = frontend.miglena || (frontend.miglena = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=miglenaServices.js.map