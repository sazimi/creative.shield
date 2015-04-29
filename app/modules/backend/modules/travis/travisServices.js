var frontend;
(function (frontend) {
    var travis;
    (function (travis) {
        var services;
        (function (services) {
            services.travisServices = [function () {
                return new TravisServices();
            }];
            var TravisServices = (function () {
                function TravisServices() {
                }
                TravisServices.prototype.getName = function () {
                    return 'Travis Elkins';
                };
                return TravisServices;
            })();
            services.TravisServices = TravisServices;
        })(services = travis.services || (travis.services = {}));
    })(travis = frontend.travis || (frontend.travis = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=travisServices.js.map