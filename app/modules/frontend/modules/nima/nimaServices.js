var frontend;
(function (frontend) {
    var nima;
    (function (nima) {
        var services;
        (function (services) {
            services.nimaServices = [function () {
                return new NimaServices();
            }];
            var NimaServices = (function () {
                function NimaServices() {
                }
                NimaServices.prototype.getName = function () {
                    return 'Nima Zahedi';
                };
                return NimaServices;
            })();
            services.NimaServices = NimaServices;
        })(services = nima.services || (nima.services = {}));
    })(nima = frontend.nima || (frontend.nima = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=nimaServices.js.map