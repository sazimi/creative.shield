var Common;
(function (Common) {
    var Navigation = (function () {
        function Navigation(title, state, icon, children) {
            this.title = title;
            this.state = state;
            this.icon = icon;
            this.children = children;
        }
        return Navigation;
    })();
    Common.Navigation = Navigation;
})(Common || (Common = {}));
//# sourceMappingURL=navigation.js.map