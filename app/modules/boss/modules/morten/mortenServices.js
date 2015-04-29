var frontend;
(function (frontend) {
    var morten;
    (function (morten) {
        var services;
        (function (services) {
            services.mortenServices = [function () {
                return new MortenServices();
            }];
            var MortenServices = (function () {
                function MortenServices() {
                }
                MortenServices.prototype.getName = function () {
                    return 'Morten Trolle';
                };
                return MortenServices;
            })();
            services.MortenServices = MortenServices;
        })(services = morten.services || (morten.services = {}));
    })(morten = frontend.morten || (frontend.morten = {}));
})(frontend || (frontend = {}));
//# sourceMappingURL=mortenServices.js.map