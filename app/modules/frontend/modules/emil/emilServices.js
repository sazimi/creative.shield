var frontend;
(function (frontend) {
    var emil;
    (function (emil) {
        var services;
        (function (services) {
            services.emilServices = [function () {
                return new EmilServices();
            }];
            var EmilServices = (function () {
                function EmilServices() {
                }
                EmilServices.prototype.getName = function () {
                    return 'Emil Møller';
                };
                return EmilServices;
            })();
            services.EmilServices = EmilServices;
        })(services = emil.services || (emil.services = {}));
    })(emil = frontend.emil || (frontend.emil = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=emilServices.js.map