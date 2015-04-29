var frontend;
(function (frontend) {
    var jesper;
    (function (jesper) {
        var services;
        (function (services) {
            services.jesperServices = [function () {
                return new JesperServices();
            }];
            var JesperServices = (function () {
                function JesperServices() {
                }
                JesperServices.prototype.getName = function () {
                    return 'Jesper Bülow Andersen';
                };
                return JesperServices;
            })();
            services.JesperServices = JesperServices;
        })(services = jesper.services || (jesper.services = {}));
    })(jesper = frontend.jesper || (frontend.jesper = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=jesperServices.js.map