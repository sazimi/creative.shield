var frontend;
(function (frontend) {
    var kim;
    (function (kim) {
        var services;
        (function (services) {
            services.kimServices = [function () {
                return new KimServices();
            }];
            var KimServices = (function () {
                function KimServices() {
                }
                KimServices.prototype.getName = function () {
                    return 'Kim Egede Jakobsen';
                };
                return KimServices;
            })();
            services.KimServices = KimServices;
        })(services = kim.services || (kim.services = {}));
    })(kim = frontend.kim || (frontend.kim = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=kimServices.js.map