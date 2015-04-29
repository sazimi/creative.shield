var frontend;
(function (frontend) {
    var jonatan;
    (function (jonatan) {
        var services;
        (function (services) {
            services.jonatanServices = [function () {
                return new JonatanServices();
            }];
            var JonatanServices = (function () {
                function JonatanServices() {
                }
                JonatanServices.prototype.getName = function () {
                    return 'Jonatan Trolle';
                };
                return JonatanServices;
            })();
            services.JonatanServices = JonatanServices;
        })(services = jonatan.services || (jonatan.services = {}));
    })(jonatan = frontend.jonatan || (frontend.jonatan = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=jonatanServices.js.map