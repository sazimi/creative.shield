var frontend;
(function (frontend) {
    var alexandra;
    (function (alexandra) {
        var services;
        (function (services) {
            services.alexandraServices = [function () {
                return new AlexandraServices();
            }];
            var AlexandraServices = (function () {
                function AlexandraServices() {
                }
                AlexandraServices.prototype.getName = function () {
                    return 'Alexandra Moldovan';
                };
                return AlexandraServices;
            })();
            services.AlexandraServices = AlexandraServices;
        })(services = alexandra.services || (alexandra.services = {}));
    })(alexandra = frontend.alexandra || (frontend.alexandra = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=alexandraServices.js.map