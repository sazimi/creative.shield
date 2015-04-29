var frontend;
(function (frontend) {
    var sebastian;
    (function (sebastian) {
        var services;
        (function (services) {
            services.sebastianServices = [function () {
                return new SebastianServices();
            }];
            var SebastianServices = (function () {
                function SebastianServices() {
                }
                SebastianServices.prototype.getName = function () {
                    return 'Sebastian Burgquist';
                };
                return SebastianServices;
            })();
            services.SebastianServices = SebastianServices;
        })(services = sebastian.services || (sebastian.services = {}));
    })(sebastian = frontend.sebastian || (frontend.sebastian = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=sebastianServices.js.map