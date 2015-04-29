var frontend;
(function (frontend) {
    var jens;
    (function (jens) {
        var services;
        (function (services) {
            services.jensServices = [function () {
                return new JensServices();
            }];
            var JensServices = (function () {
                function JensServices() {
                }
                JensServices.prototype.getName = function () {
                    return 'Jens Svensson';
                };
                return JensServices;
            })();
            services.JensServices = JensServices;
        })(services = jens.services || (jens.services = {}));
    })(jens = frontend.jens || (frontend.jens = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=jensServices.js.map