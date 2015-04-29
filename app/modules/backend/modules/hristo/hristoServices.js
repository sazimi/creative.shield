var frontend;
(function (frontend) {
    var hristo;
    (function (hristo) {
        var services;
        (function (services) {
            services.hristoServices = [function () {
                return new HristoServices();
            }];
            var HristoServices = (function () {
                function HristoServices() {
                }
                HristoServices.prototype.getName = function () {
                    return 'Hristo Petev';
                };
                return HristoServices;
            })();
            services.HristoServices = HristoServices;
        })(services = hristo.services || (hristo.services = {}));
    })(hristo = frontend.hristo || (frontend.hristo = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=hristoServices.js.map